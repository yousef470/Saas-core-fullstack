const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // تأكد من تثبيت dotenv

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cors());

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

// ✅ Connect to MongoDB (المحلي)
// تأكد أنك قمت بتثبيت MongoDB على جهازك كما اتفقنا
mongoose.connect("mongodb://127.0.0.1:27017/saas_core_db")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes (سنتأكد من وجود هذه المجلدات لاحقاً)
// const productRoutes = require("./routes/products");
// app.use("/api/products", productRoutes);

// ✅ Serve frontend من مجلد client
app.use(express.static(path.join(__dirname, "../client/dist")));

// استبدل الـ app.get(/.*/, ...) بهذا الكود:

// نقوم بالتحقق من الطلبات التي لا تبدأ بـ /api
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // سننشئ الموديل بعد قليل

// الحصول على جميع المنتجات
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// إضافة منتج جديد
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
});

// تحديث منتج
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// حذف منتج
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
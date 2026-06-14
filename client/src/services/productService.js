import axios from "axios";

// رابط السيرفر (الباك إند) الذي يعمل على المنفذ 5000
const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data; // هنا ستصلك البيانات الحقيقية من MongoDB
};

export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const updateProduct = async (updatedProduct) => {
  // ملاحظة: تأكد أنك تستخدم _id (الذي يأتي من مونغو)
  const response = await axios.put(`${API_URL}/${updatedProduct._id}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
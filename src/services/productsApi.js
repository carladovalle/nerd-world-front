import { api } from './api';

export async function getProducts() {
  const response = await api.get('/products');
  return response.data;
}

export async function getProductById(productId) {
  const response = await api.get(`/products/product/${productId}`);
  return response.data;
}

export async function getProductsByType(typeId) {
  const response = await api.get(`/products/${typeId}`);
  return response.data;
}

import { api } from './api';

export async function getCategories() {
  const response = await api.get('/categories');
  return response.data;
}

export async function getCategoryById(categoryId) {
  const response = await api.get(`/categories/${categoryId}`);
  return response.data;
}
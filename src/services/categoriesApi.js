import api from './api';

export async function getCategories(token) {
  const response = await api.get('/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getCategoryById(categoryId, token) {
  const response = await api.get(`/categories/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
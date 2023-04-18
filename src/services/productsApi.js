import api from './api';

export async function getProducts(token) {
  const response = await api.get('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getProductById(productId, token) {
  const response = await api.get(`/products/product/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getProductsByType(typeId, token) {
  const response = await api.get(`/products/${typeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

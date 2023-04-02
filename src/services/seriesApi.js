import api from './api';

export async function getSeries(token) {
  const response = await api.get('/series', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getSerieById(serieId, token) {
  const response = await api.get(`/series/${serieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
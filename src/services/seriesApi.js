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

export async function getSeriesByStreamings(token) {
  const response = await api.get('/series/streamings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getSeriesByStreamingById(streamingId, token) {
  const response = await api.get(`/series/streamings/${streamingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
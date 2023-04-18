//import { api, createHeaders } from './api';
import api from './api';

export async function getEnrollment() {
  //const config = createHeaders();
  const response = await api.get('/enrollments');
  return response.data;
}

export async function postEnrollment(body) {
  //const config = createHeaders();
  const response = await api.post('/enrollments', body);
  return response.data;
}
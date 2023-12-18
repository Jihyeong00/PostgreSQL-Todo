import axios from 'axios';
import { BASE_URL } from '@/constants/Api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  withCredentials: true,
});

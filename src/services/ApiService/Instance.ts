import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Base url de l'api
export const API_URL = process.env.API_URL;

// Instance d'axios permettant d'utiliser des intercepteurs de requête et une configuration de base
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Logue chaque résultat de requete
axiosInstance.interceptors.response.use(
  response => {
    console.log('Request SUCCESS: ', response);
    return response;
  },
  error => {
    console.log('Request ERROR: ', error.response);
    return Promise.reject(error);
  }
);

async function Request(type: string, path: string, payload: any, noAuth?: boolean): Promise<any> {
  try {
    let response: AxiosResponse;
    if (type === 'post') {
      response = await axiosInstance.post(path, payload);
    } else if (type === 'put') {
      response = await axiosInstance.put(path, payload);
    } else if (type === 'get') {
      response = await axiosInstance.get(path, {
        params: payload,
      });
    } else if (type == 'postFormData') {
      response = await axiosInstance.post(path, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export default Request;

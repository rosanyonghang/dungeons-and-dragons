import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../config/baseURL';

const baseAxios: AxiosInstance = axios.create();

baseAxios.defaults.baseURL = BASE_URL;

// Add a request interceptor
baseAxios.interceptors.request.use(
	(config) => config, // function(config)
	(error) => Promise.reject(error), // function(error)
); // baseAxios.interceptors.request.use

baseAxios.interceptors.response.use(
	(response) => {
		if (response.status === 200) {
			console.log('data loaded successfully');
		}

		if (response.status === 201) {
			// console.log('data created    successfully');
		}
		return response.data;
	}, // function(response)
	(error) => {
		if ([403, 401].includes(error?.response?.status)) {
			console.log('Authorization is required');
		}
		return Promise.reject(error?.response?.data?.message);
	}, // function(error)
); // baseAxios.interceptors.response.use

export default baseAxios;

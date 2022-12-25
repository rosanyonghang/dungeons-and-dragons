import baseAxios from './axios';

export const GetRequest = (url: string, config: any = null) => baseAxios.get(url, config);

export const PostRequest = (url: string, config: any = null) => baseAxios.post(url, config);

export const PutRequest = (url: string, config: any = null) => baseAxios.put(url, config);

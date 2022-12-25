import baseAxios from "./axios";

export const GetRequest = (url: string, config: any=null) => {
    return baseAxios.get(url, config)
}

export const PostRequest = (url: string, config: any=null) => {
    return baseAxios.post(url, config);
}

export const PutRequest = (url: string, config: any=null) => {
    return baseAxios.put(url, config);
}
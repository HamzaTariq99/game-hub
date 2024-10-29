import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string |null;
    results: T[];
  }   

const axiosInstance= axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '2eef00dc15484404bdf71e4a76d26a1a'
    }
})

class APIClient<T>{
    endPoint: string;

    constructor(endPoint: string){
        this.endPoint= endPoint
    }

    getAll =  (config?: AxiosRequestConfig) => { // this parameter only need in game hook thats why optional 
        return axiosInstance
                .get<FetchResponse<T>>(this.endPoint, config) // in uor games hook we need a config object for passing query string to backend
                .then(res => res.data);
    }

    get = (id: number | string)=>{
       return  axiosInstance.get<T>(this.endPoint + '/' + id).then(res => res.data);
    }
} 

export default APIClient;
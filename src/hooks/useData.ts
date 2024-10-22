
import { useState,useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
  count: number,
  results: T[]
}  
  
const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    // effect hook to send a fetch request to backend
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal})
        //setgame oe aty us ny interface define kiya ha
        .then((res) => {
            setData(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {   
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        }
            );
        return () => controller.abort();
    }, []); // to avoid infinite refetching

    return {data, error, isLoading}
}

export default useData;
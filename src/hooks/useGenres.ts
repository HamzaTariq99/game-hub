import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const apiClient  = new APIClient<Genre>('/genres');

export interface Genre {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    id: number;
    name: string;
    image_background: string;
  }

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24*60*60*1000,//24 hour it hardly ever change we ca also set for 1 year 
  initialData: genres // Only include properties that exist in FetchResponse
});
export default useGenre;
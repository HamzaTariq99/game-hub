import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';

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
  staleTime: ms('24h'),
  initialData: genres // Only include properties that exist in FetchResponse
});
export default useGenre;
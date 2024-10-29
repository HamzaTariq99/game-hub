import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import Genre  from "../entities/Genre";

const apiClient  = new APIClient<Genre>('/genres');

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres // Only include properties that exist in FetchResponse
});
export default useGenre;
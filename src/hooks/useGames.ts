import { useInfiniteQuery, } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from '../store';
import { Platform } from './usePlatforms';

const apiClient  = new APIClient<Game>('/games');


//array ky object main kya kya ho ga
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
  }
  //idr fetch is liye ky to tell the type of the data that useQuery expects from the queryFn
  const useGames = () => {
   const gameQuery=  useGameQueryStore(s=>s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ['games', gameQuery], // kuch bi is main change ho ga refetch ho ga just like dependency
      queryFn: ({pageParam=1, }) => apiClient.getAll({ 
        params: {
          genres: gameQuery.genreId , 
          parent_platforms : gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
         }
      }),
      getNextPageParam: (lastPage, allPages) =>{
        return lastPage.next ? allPages.length +1 : undefined;
      },
      staleTime: ms('24h'),//24h
    });
  }
   



export default useGames;

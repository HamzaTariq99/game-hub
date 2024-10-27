import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient =new APIClient<Platform>('/platforms/lists/parents')
export interface Platform{
    id: number,
    name: string,
    slug: string
}

//const usePlatforms =()=> useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => 
   useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  initialData: platforms 
  });

// const usePlatforms = () =>
//     useQuery<FetchResponse<Platform>>(
//         ['platforms'], // queryKey
//         () => apiClient.getAll(), // queryFn as a no-arg function
//         {
//             staleTime: 24 * 60 * 60 * 1000,
//             initialData: {
//                 count: platforms.length,
//                 results: platforms,
//                 next: null, // Only include properties that exist in FetchResponse
//             },
//         }
//     );

//export default usePlatforms;

export default usePlatforms; 
import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query"; 
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient =new APIClient<Platform>('/platforms/lists/parents')
export interface Platform{
    id: number,
    name: string,
    slug: string
}

//const usePlatforms =()=> useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => 
   useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000,
   initialData: {count: platforms.length, results: platforms,next: null,}  
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
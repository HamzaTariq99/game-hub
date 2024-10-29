import { Platform } from "./Platform";

//array ky object main kya kya ho ga


export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}

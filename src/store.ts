import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string)=> void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    // elehda elehda function sab ky is liye han kue ky logic for updating searchtext is different from others
}

const useGameQueryStore= create <GameQueryStore>(set=> ({
    gameQuery:{},
    setSearchText:(searchText) => set(()=> ({gameQuery:{searchText}})), // jab user search kry to sirf text ka object ho baki sary clear krny han
    setGenreId :(genreId)=> set(store=>({gameQuery:{... store.gameQuery, genreId}})), // copy all  data and then update
    setPlatformId: (platformId)=> set(store=>({gameQuery:{... store.gameQuery, platformId}})),
    setSortOrder: (sortOrder)=> set(store=>({gameQuery:{... store.gameQuery, sortOrder}})) 
}));
export default useGameQueryStore;
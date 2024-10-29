import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
// game query object as a prop chahiye ide dynamic ky liye
// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = () => {
 // const genre = useGenre(gameQuery.genreId);
  // const platform = usePlatform(gameQuery.platformId);
const genreId= useGameQueryStore(s=> s.gameQuery.genreId);
const genre = useGenre(genreId);

const platformId= useGameQueryStore(s=> s.gameQuery.platformId);
const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

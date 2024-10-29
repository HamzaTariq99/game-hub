import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

// to notify the parent that genere has been selected
// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

//const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const selectedGenreId= useGameQueryStore(s=> s.gameQuery.genreId);
  const setSelectedGenreId= useGameQueryStore(s=> s.setGenreId);
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize="lg"
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

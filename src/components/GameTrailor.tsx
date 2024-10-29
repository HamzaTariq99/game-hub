import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailor = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error; // so that react router catches it and throw it to errors page
  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailor;

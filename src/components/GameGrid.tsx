import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  
  return (
    <>
      {error && <Text> {error} </Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {" "}
            {game.name} - {game.released.toString()}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

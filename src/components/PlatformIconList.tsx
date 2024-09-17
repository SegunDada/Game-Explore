import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { Game } from "../hooks/useGames";
import { Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  game: Game;
}
const PlatformIconList = ({ game }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    "PC Booter": FaXbox,
    DOS: FaWindows,
    "SEGA Master System": FaPlaystation,
    Amiga: FaPlaystation,
    "Atari 8-bit": FaXbox,
  };
  //return <Text>{game.sample_cover.platforms}</Text>;
  return (
    <Icon
      key={game.sample_cover.platforms}
      as={iconMap[game.sample_cover.platforms]}
      color="gray.400"
    />
  );
};

export default PlatformIconList;

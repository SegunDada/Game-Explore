import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

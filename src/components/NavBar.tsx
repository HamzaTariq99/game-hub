import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (SearchText: string) => void;
// }
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

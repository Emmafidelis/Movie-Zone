import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={1}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <HStack>
        <Text>Home</Text>
        <Text>Movies</Text>
        <Text whiteSpace="nowrap">TV Shows</Text>
        <Text>Login</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

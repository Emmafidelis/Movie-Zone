import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={1}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
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

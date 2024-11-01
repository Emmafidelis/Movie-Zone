import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={1}>
      <Image src={logo} boxSize="60px" />
      <HStack>
        <ColorModeSwitch />
        <Text>Login</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;

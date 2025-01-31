import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const NavBar = () => {
  const {isAuthenticated} = useAuth();

  return (
    <HStack justifyContent="space-between" padding={1}>
      <Link to='/'>
        <Image sizes="sm" fit={'cover'} src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <HStack>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/series'>
          <Text whiteSpace="nowrap">TV Shows</Text>
        </Link>
        {isAuthenticated ? <Link to='/logout'>
          Logout
        </Link> : <Link to='/login'>Login</Link>}
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

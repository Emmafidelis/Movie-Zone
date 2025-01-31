import { Button } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";


const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
    <h2>Hi Their do you want to logout </h2>
    <Button colorScheme="red" onClick={handleLogout}>
      Logout
    </Button>
    </>
  );
};

export default LogoutButton;
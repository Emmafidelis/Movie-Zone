import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, Heading, Spinner } from "@chakra-ui/react";
import { frappeClient } from "../services/api-client";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");


  useEffect(() => {
    const exchangeToken = async () => {
      try {
        const { data } = await frappeClient.post("/api/method/frappe.integrations.oauth2.get_token", {
          grant_type: "authorization_code",
          client_id: import.meta.env.VITE_FRAPPE_CLIENT_ID,
          client_secret: import.meta.env.VITE_FRAPPE_CLIENT_SECRET,
          code: code,
          redirect_uri: import.meta.env.VITE_FRAPPE_REDIRECT_URI
        });

        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        navigate("/login");
      }
    };

    if (code) exchangeToken();
  }, [code, navigate]);

  // Initiate OAuth2 login
  const handleLogin = () => {
    const authUrl = `${
      import.meta.env.VITE_FRAPPE_BASE_URL
    }/api/method/frappe.integrations.oauth2.authorize?client_id=${
      import.meta.env.VITE_FRAPPE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_FRAPPE_REDIRECT_URI
    }&response_type=code`;

    window.location.href = authUrl;
  };

  if (code) return <Spinner size="xl" />;

  return (
    <Box textAlign="center" mt={20}>
      <Heading mb={4}>Login with Frappe</Heading>
      <Button colorScheme="blue" onClick={handleLogin}>
        Continue with Frappe
      </Button>
    </Box>
  );
};

export default LoginPage;
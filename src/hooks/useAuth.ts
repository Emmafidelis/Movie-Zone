import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/login");
  }, [navigate]);

  return {
    isAuthenticated: !!localStorage.getItem("access_token"),
    logout: () => {
      localStorage.removeItem("access_token");
      navigate("/login");
    }
  };
};

export default useAuth;
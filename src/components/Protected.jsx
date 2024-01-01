import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("...");

  useEffect(() => {
    if (!getToken) {
      navigate("/unauthorized");
    }
  }, [getToken, navigate]);

  if (!getToken) {
    return null;
  }

  return children;
};

export default Protected;

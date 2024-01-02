import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedDeleteToken = ({ children }) => {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("...");

  useEffect(() => {
    if (getToken) {
      alert("Anda harus logout akun anda");
    }
  }, [getToken, navigate]);

  if (getToken) {
    return null;
  }

  return children;
};

export default ProtectedDeleteToken;

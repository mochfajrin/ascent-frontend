import api from "./api.js";

const fetchingUserData = async () => {
  const res = await api.get("/user");
  return res.data.allUser;
};

const loginUser = async (email, password, user) => {
  const res = await api.post(`/auth/${user}/login`, {
    email: email,
    password: password,
  });

  return localStorage.setItem("...", res.data.data);
};

export { fetchingUserData, loginUser };

import api from "./api.js";

const getCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const getMemberData = async () => {
  const res = await api.get("/user");
  return res.data.data.allUser;
};

const loginUser = async (email, password, user) => {
  const res = await api.post(`/auth/${user}/login`, {
    email: email,
    password: password,
  });

  return localStorage.setItem("accessToken", res.data.data);
};

export { getCourseData, getMemberData, loginUser };

import api from "./api.js";

const getCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const getCourseDataById = async (id, token) => {
  const res = await api.get(`/course/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};

const getMemberData = async () => {
  const res = await api.get("/user");
  return res.data.allUser;
};

const getTrasactionData = async (token) => {
  const res = await api.get("/transaction", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.transactions;
};

const loginUser = async (email, password, user) => {
  const res = await api.post(`/auth/${user}/login`, {
    email: email,
    password: password,
  });

  return localStorage.setItem("...", res.data.data);
};

export {
  getCourseData,
  getMemberData,
  loginUser,
  getTrasactionData,
  getCourseDataById,
};

import api from "./api.js";

const fetchingCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const fetchingCourseDataById = async (id, token) => {
  const res = await api.get(`/course/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};

const fetchingFilterCourseData = async (filter) => {
  const res = await api.get(`/course?type=${filter}`);
  return res.data.data;
};

const deletetingCourseData = async (id, token) => {
  const res = await api.delete(`/course/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.message;
};

const fetchingUserData = async () => {
  const res = await api.get("/user");
  return res.data.allUser;
};

const fetchingTrasactionData = async (token) => {
  const res = await api.get("/transaction", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.transactions;
};

// const fetchingSearchTrasactionData = async (token) => {
//   const res = await api.get("/transaction", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data.transactions;
// };

const loginUser = async (email, password, user) => {
  const res = await api.post(`/auth/${user}/login`, {
    email: email,
    password: password,
  });

  return localStorage.setItem("...", res.data.data);
};

export {
  fetchingCourseData,
  fetchingUserData,
  fetchingFilterCourseData,
  loginUser,
  fetchingTrasactionData,
  fetchingCourseDataById,
  deletetingCourseData,
};

import api from "./api.js";

const getCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const getMemberData = async () => {
  const res = await api.get("/user");
  return res.data.data.allUser;
};

export { getCourseData, getMemberData };

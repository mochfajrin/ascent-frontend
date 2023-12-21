import api from "../api";

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

const fetchingFilterCourseData = async ({ filter, query }) => {
  let res;
  if (filter && query) {
    res = await api.get(`/course?search=${query}&type=${filter}`);
  } else {
    res = await api.get(
      `/course?${filter ? `type=${filter}` : `search=${query}`}`
    );
  }

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

export {
  fetchingCourseData,
  fetchingFilterCourseData,
  fetchingCourseDataById,
  deletetingCourseData,
};

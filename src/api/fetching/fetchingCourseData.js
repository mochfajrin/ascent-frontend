import api from "../api";

const fetchingCourseData = async () => {
  const res = await api.get("/course?sort_by=createdAt&order_by=desc");
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

const postCourseData = async (formData, token) => {
  console.log(token);
  await api.post("/course/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

const patchCourseData = async (id, formData, token) => {
  await api.patch(`/course/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

const deletetingCourseData = async (id, token) => {
  await api.delete(`/course/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  fetchingCourseData,
  fetchingFilterCourseData,
  fetchingCourseDataById,
  postCourseData,
  patchCourseData,
  deletetingCourseData,
};

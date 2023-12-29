import api from "../api";

const fetchingChapterData = async (token) => {
  const res = await api.get("/chapter", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data.chapters;
};

// const fetchingCourseDataById = async (id, token) => {
//   const res = await api.get(`/course/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data.data;
// };

// const fetchingFilterCourseData = async ({ filter, query }) => {
//   let res;
//   if (filter && query) {
//     res = await api.get(`/course?search=${query}&type=${filter}`);
//   } else {
//     res = await api.get(
//       `/course?${filter ? `type=${filter}` : `search=${query}`}`
//     );
//   }

//   return res.data.data;
// };

const postChapterData = async (formData, token, id) => {
  await api.post(`/chapter/create/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const patchChapterData = async (formData, token, id) => {
  await api.put(`/chapter/update/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deletetingChapterData = async (id, token) => {
  await api.delete(`/chapter/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  fetchingChapterData,
  // fetchingFilterCourseData,
  // fetchingCourseDataById,
  patchChapterData,
  postChapterData,
  deletetingChapterData,
};

import api from "../api";

// const fetchingChapterData = async (token) => {
//   const res = await api.get("/chapter", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data.data.chapters;
// };

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

const postContentData = async (formData, token, id) => {
  await api.post(`/content/insert-bylink/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const patchContentData = async (formData, token, chapterid, contentId) => {
  await api.patch(
    `/content/update-bylink/${chapterid}/${contentId}`,
    formData,
    {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const deletetingContentData = async (id, token) => {
  await api.delete(`/content/deleted/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  // fetchingChapterData,
  // fetchingFilterCourseData,
  // fetchingCourseDataById,
  patchContentData,
  postContentData,
  deletetingContentData,
};

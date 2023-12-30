import {
  fetchingCourseData,
  fetchingFilterCourseData,
  fetchingCourseDataById,
  postCourseData,
  deletetingCourseData,
  patchCourseData,
} from "../../api/fetching/fetchingCourseData";

import { setCourseData } from "../reducers/courseReducer";

import { toastify } from "../../utils/toastify";

const getCourseData = (setLoading) => async (dispatch) => {
  try {
    const res = await fetchingCourseData();
    dispatch(setCourseData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

const getCourseDataById = (setLoading, id) => async (dispatch) => {
  try {
    setLoading(true);
    const getToken = localStorage.getItem("...");
    const res = await fetchingCourseDataById(id, getToken);
    dispatch(setCourseData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

const getFilterCourseData =
  ({ queryData, filterData, setLoadingTable }) =>
  async (dispatch) => {
    setLoadingTable(true);
    try {
      const res = await fetchingFilterCourseData({
        filter: filterData,
        query: queryData,
      });
      dispatch(setCourseData(res));
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setLoadingTable(false);
    }
  };

const createCourseData =
  (imageFile, navigate, setLoading) => async (dispatch, getState) => {
    try {
      setLoading(true);
      const { form } = getState().course;

      const formData = new FormData();

      formData.append("image", imageFile);

      for (const key in form) {
        formData.append(key, form[key]);
      }

      const getToken = localStorage.getItem("...");
      await postCourseData(formData, getToken);
      toastify({ message: "Berhasil menambahkan kelas", type: "success" });
      navigate("/dashboard/course-management");
    } catch (err) {
      // if (err.response.data.message) {
      //   alert("Harap isi formulir yang diberi tanda *");
      // }
      if (err.response.status === 400) {
        alert("Untuk memberikan diskon harga kelas harus diatas Rp.10.000");
      }
      console.log(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

const updateCourseData =
  (imageFile, navigate, setLoading, id) => async (dispatch, getState) => {
    try {
      setLoading(true);
      const { form } = getState().course;

      const formData = new FormData();

      formData.append("image", imageFile);

      for (const key in form) {
        formData.append(key, form[key]);
      }

      const getToken = localStorage.getItem("...");
      await patchCourseData(id, formData, getToken);
      toastify({ message: "Berhasil memperbarui data kelas", type: "success" });
      navigate("/dashboard/course-management");
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

const deleteCourseData = (id, setLoading, callback) => async () => {
  try {
    const getToken = localStorage.getItem("...");

    await deletetingCourseData(id, getToken);
    callback();
    toastify({ message: "Berhasil mengahapus kelas", type: "success" });
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

export {
  getCourseData,
  getFilterCourseData,
  getCourseDataById,
  createCourseData,
  updateCourseData,
  deleteCourseData,
};

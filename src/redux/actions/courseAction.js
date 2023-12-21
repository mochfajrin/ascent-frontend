import {
  fetchingCourseData,
  fetchingFilterCourseData,
  fetchingCourseDataById,
  deletetingCourseData,
} from "../../api/fetching";

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

const deleteCourseData = (id, callback) => async () => {
  try {
    const getToken = localStorage.getItem("...");

    await deletetingCourseData(id, getToken);
    callback();
    toastify({ message: "Berhasil mengahapus kelas", type: "success" });
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  getCourseData,
  getFilterCourseData,
  getCourseDataById,
  deleteCourseData,
};

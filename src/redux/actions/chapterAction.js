import {
  fetchingChapterData,
  postChapterData,
  deletetingChapterData,
  patchChapterData,
} from "../../api/fetching/fetchingChapterData";
import { setChapterData } from "../reducers/chapterReducer";

import { toastify } from "../../utils/toastify";

const getChapterData = (setLoading) => async (dispatch) => {
  try {
    const getToken = localStorage.getItem("...");

    const res = await fetchingChapterData(getToken);
    dispatch(setChapterData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

const createChapterData =
  (setAddChapterLoading, id, callback) => async (dispatch, getState) => {
    try {
      setAddChapterLoading(true);
      const { form } = getState().chapter;

      const formData = new FormData();

      formData.append("chapterTitle", form.chapterTitle);

      const getToken = localStorage.getItem("...");
      await postChapterData(formData, getToken, id);
      callback();
      toastify({ message: "Berhasil menambahkan bab", type: "success" });
    } catch (err) {
      if (err.response.status === 400) {
        alert("Formulir tidak boleh kosong");
      }
    } finally {
      setAddChapterLoading(false);
    }
  };

const updateChapterData =
  (setUpdateChapterLoading, id, callback) => async (dispatch, getState) => {
    try {
      setUpdateChapterLoading(true);
      const { form } = getState().chapter;

      const formData = new FormData();

      formData.append("chapterTitle", form.chapterTitle);

      const getToken = localStorage.getItem("...");
      await patchChapterData(formData, getToken, id);
      callback();
      toastify({ message: "Berhasil memperbarui judul bab", type: "success" });
    } catch (err) {
      throw new Error(err.response.data.message);
    } finally {
      setUpdateChapterLoading(false);
    }
  };

const deleteChapterData = (id, setLoading, callback) => async () => {
  try {
    const getToken = localStorage.getItem("...");

    await deletetingChapterData(id, getToken);
    callback();
    toastify({ message: "Berhasil mengahapus bab", type: "success" });
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

export {
  createChapterData,
  getChapterData,
  updateChapterData,
  deleteChapterData,
};

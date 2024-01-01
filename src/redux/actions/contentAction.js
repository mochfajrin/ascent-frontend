import { toastify } from "../../utils/toastify";

import {
  postContentData,
  patchContentData,
  deletetingContentData,
} from "../../api/fetching/fetchingContentData";

const createContentData =
  (setAddChapterLoading, id, callback) => async (dispatch, getState) => {
    try {
      setAddChapterLoading(true);
      const { form } = getState().content;

      if (form.videoDuration.includes(":")) {
        const formData = new FormData();

        for (const key in form) {
          formData.append(key, form[key]);
        }

        const getToken = localStorage.getItem("...");
        await postContentData(formData, getToken, id);
        callback();
        toastify({ message: "Berhasil menambahkan konten", type: "success" });
      } else {
        alert("Format durasi tidak falid. Harap gunakan format mm:ss");
      }
    } catch (err) {
      if (err.response.data.message) {
        alert("Formulir tidak boleh kosong");
      }
    } finally {
      setAddChapterLoading(false);
    }
  };

const updateContentData =
  (setUpdateChapterLoading, chapterId, contentId, callback) =>
  async (dispatch, getState) => {
    try {
      setUpdateChapterLoading(true);
      const { form } = getState().content;

      // const formData = new FormData();

      // for (const key in form) {
      //   formData.append(key, form[key]);
      // }

      const getToken = localStorage.getItem("...");
      await patchContentData(form, getToken, chapterId, contentId);
      callback();
      toastify({
        message: "Berhasil memperbarui data konten",
        type: "success",
      });
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setUpdateChapterLoading(false);
    }
  };

const deleteContentData = (id, setLoading, callback) => async () => {
  try {
    const getToken = localStorage.getItem("...");

    await deletetingContentData(id, getToken);
    callback();
    toastify({ message: "Berhasil mengahapus konten kelas", type: "success" });
  } catch (err) {
    throw new Error(err.response.data.message);
  } finally {
    setLoading(false);
  }
};

export { createContentData, deleteContentData, updateContentData };

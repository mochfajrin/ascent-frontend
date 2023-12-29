import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";

import { setForm } from "../../../redux/reducers/courseReducer";

const FormCourse = ({ setImageFile }) => {
  const dispatch = useDispatch();
  const [inputDiscount, setInputDiscount] = useState(false);

  const { form } = useSelector((state) => state.course);

  const showInputDiscount = (e) => {
    if (JSON.parse(e.target.value) == false) {
      setInputDiscount(false);
    } else if (JSON.parse(e.target.value) == true) {
      setInputDiscount(true);
    }
  };

  return (
    <div className="flex flex-row justify-between space-x-16  text-base">
      <form className="w-full">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Kode kelas :
          </label>
          <input
            onChange={(e) =>
              dispatch(setForm({ ...form, courseCode: e.target.value }))
            }
            type="text"
            id="base-input"
            placeholder="Beri kode kelas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Nama kelas :
          </label>
          <input
            onChange={(e) =>
              dispatch(setForm({ ...form, courseName: e.target.value }))
            }
            type="text"
            id="base-input"
            placeholder="Beri nama kelas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Level kelas :
          </label>
          <select
            onChange={(e) =>
              dispatch(setForm({ ...form, courseLevel: e.target.value || "" }))
            }
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Pilih level kelas</option>
            <option value="Beginner">Beginner</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediate">Intermediate</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Tentang kelas :
          </label>
          <textarea
            onChange={(e) =>
              dispatch(setForm({ ...form, aboutCourse: e.target.value }))
            }
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan data tentang kelas"
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Kelas ini ditujukan untuk :
          </label>
          <textarea
            onChange={(e) =>
              dispatch(setForm({ ...form, intendedFor: e.target.value }))
            }
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Contoh: Untuk pemula yang ingin menjadi profesional, untuk menjadi andorid dev"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Grub kelas :
          </label>
          <input
            onChange={(e) =>
              dispatch(setForm({ ...form, telegramGroup: e.target.value }))
            }
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Beri url grub kelas"
          />
        </div>
      </form>
      <form className="w-full">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Harga kelas (Rp) :
          </label>
          <input
            onChange={(e) =>
              dispatch(
                setForm({ ...form, coursePrice: parseInt(e.target.value) || 0 })
              )
            }
            type="number"
            id="base-input"
            min="0"
            placeholder="masukkan harga kelas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-3  ">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="default_size"
          >
            Unggah gambar kelas :
          </label>
          <input
            onChange={(e) => {
              if (e.target.files.length === 0) return;
              setImageFile(e.target.files[0]);
            }}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="default_size"
            type="file"
          />
          <p
            className="mt-1 text-xs text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, or JPG
          </p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Kategori kelas :
          </label>
          <select
            onChange={(e) =>
              dispatch(
                setForm({ ...form, categoryId: parseInt(e.target.value) })
              )
            }
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Beri kategori kelas</option>
            <option value={1}>UI/UX Design</option>
            <option value={2}>Web Development</option>
            <option value={3}>Data Science</option>
            <option value={4}>Android Development</option>
            <option value={5}>Product Management</option>
            <option value={6}>IOS Development</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Beri diskon ? :
          </label>
          <select
            onChange={(e) => showInputDiscount(e)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Beri diskon kelas ?</option>
            <option value={true}>Iya</option>
            <option value={false}>Tidak</option>
          </select>
        </div>
        {inputDiscount == true && (
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2  font-medium text-gray-900 dark:text-white"
            >
              Beri diskon (%) :
            </label>
            <input
              onChange={(e) =>
                dispatch(
                  setForm({
                    ...form,
                    courseDiscountInPercent: parseInt(e.target.value),
                  })
                )
              }
              type="number"
              id="base-input"
              min="0"
              max="100"
              placeholder="Beri diskon pada kelas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Beri rating :
          </label>
          <input
            onChange={(e) =>
              dispatch(
                setForm({
                  ...form,
                  courseRating: parseFloat(e.target.value) || 0,
                })
              )
            }
            type="number"
            id="base-input"
            min="0"
            max="10"
            step="0.1"
            placeholder="Beri rating pada kelas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};
FormCourse.propTypes = {
  setImageFile: PropTypes.func.isRequired,
};

export default FormCourse;
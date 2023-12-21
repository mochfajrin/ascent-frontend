import { Link } from "react-router-dom";

import FormAddCourse from "./components/FormAddCourse";

const AddCoursePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Tambah kelas</h1>
      <Link
        to={"/dashboard/course-management"}
        className="text-black flex flex-row items-center space-x-2 mb-4 mt-6"
      >
        <svg
          className="w-4 h-4 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>

        <p className="text-lg"> Kembali</p>
      </Link>
      <div className="bg-slate-50 w-full p-6 rounded-lg shadow-lg mt-6">
        <FormAddCourse />
        <Link to={"/dashboard/course-management"} className="flex justify-end">
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 mt-8 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Simpan
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddCoursePage;

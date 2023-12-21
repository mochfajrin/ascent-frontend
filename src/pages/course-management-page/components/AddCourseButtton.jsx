import { Link } from "react-router-dom";

const AddCourseButton = () => {
  return (
    <Link to={"/dashboard/course-management/add-course"}>
      <button
        type="button"
        className="flex flex-row items-center gap-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        <svg
          className="w-6 h-6 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Tambah
      </button>
    </Link>
  );
};

export default AddCourseButton;

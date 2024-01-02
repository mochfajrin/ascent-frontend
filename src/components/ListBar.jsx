/* eslint-disable react/prop-types */
import { Link, useLocation, useParams } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { toastify } from "../utils/toastify";

const ListBar = ({ closeDropDown }) => {
  const { id, courseId, chapterId, contentId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("...");
    toastify({ message: "Anda berhasil logout", type: "success" });

    setTimeout(() => {
      navigate("/dashboard/login");
    }, 2000);
  };

  const isActive = (path) => {
    const activePaths = [
      "/dashboard/course-management",
      `/dashboard/course-management/delete-course/${id}`,
      `/dashboard/course-management/add-course`,
      `/dashboard/course-management/chapter-course/${courseId}`,
      `/dashboard/course-management/${id}`,
      `/dashboard/course-management/chapter-course/${courseId}/delete-chapter/${chapterId}`,
      `/dashboard/course-management/chapter-course/${courseId}/delete-content/${contentId}`,
      `/dashboard/course-management/update-course/${courseId}`,
      `/dashboard/course-management/chapter-course/${courseId}/update-chapter/${chapterId}`,
      `/dashboard/course-management/chapter-course/${courseId}/update-content/${contentId}/${chapterId}`,
    ];

    return activePaths.includes(path);
  };

  const linkClass = `block py-2 max-md:rounded px-3 lg:px-4 hover:bg-[#0092A4] ${
    isActive(location.pathname) ? "bg-[#0092A4] text-white" : ""
  } w-full`;

  return (
    <div className="flex-auto flex flex-col justify-between h-52 rounded-lg font-bold mt-2 text-[#303A2B]   ">
      <ul className="md:text-sm lg:text-md xl:text-lg  w-full">
        <li>
          <Link
            onClick={closeDropDown}
            to={"/dashboard"}
            className={`block py-2  max-md:rounded px-3 lg:px-4  hover:bg-[#0092A4] active: ${
              location.pathname == "/dashboard" && "bg-[#0092A4] text-white"
            }
           w-full  `}
          >
            <div className="flex items-center gap-2">
              Beranda
              <FaHome />
            </div>
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDropDown}
            to={"/dashboard/course-management"}
            href="#"
            className={linkClass}
          >
            <div className="flex items-center gap-2">
              Kelola kelas
              <SiGoogleclassroom />
            </div>
          </Link>
        </li>
      </ul>

      <div className="md:flex md:flex-row md:justify-center">
        <button
          onClick={logOut}
          type="button"
          className="flex flex-row items-center space-x-2 text-xs md:text-sm lg:text-md xl:text-lg md:w-32 lg:w-40 xl:w-48 p-2.5 focus:outline-none text-white bg-[#FF6B6B] hover:bg-red-500 focus:ring-2 focus:ring-red-300 font-medium rounded-lg me-2 mb-2 "
        >
          <svg
            className=" h-5 text-white dark:text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
            />
          </svg>
          <div className=" text-white">Keluar</div>
        </button>
      </div>
    </div>
  );
};

export default ListBar;

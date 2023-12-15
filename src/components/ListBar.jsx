/* eslint-disable react/prop-types */
import { Link, useLocation, useParams } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
// import { FaUserGroup } from "react-icons/fa6";

const ListBar = ({ closeDropDown }) => {
  const { id } = useParams();

  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("...");
  };

  return (
    <div className="flex-auto flex flex-col justify-between h-52 rounded-lg font-bold mt-2 text-[#3C3C3C]  md:text-white ">
      <ul className="md:text-sm lg:text-md xl:text-lg  w-full">
        <li>
          <Link
            onClick={closeDropDown}
            to={"/dashboard"}
            href="#"
            className={`block py-2  max-md:rounded px-3 lg:px-4  hover:bg-[#0092A4] active: ${
              location.pathname == "/dashboard" && "bg-[#0092A4]"
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
            className={`block py-2  max-md:rounded px-3 lg:px-4  hover:bg-[#0092A4] ${
              (location.pathname == "/dashboard/course-management" ||
                location.pathname == `/dashboard/course-management/${id}`) &&
              "bg-[#0092A4]"
            }  w-full  `}
          >
            <div className="flex items-center gap-2">
              Kelola kelas
              <SiGoogleclassroom />
            </div>
          </Link>
        </li>
      </ul>

      <div className="md:flex md:flex-row md:justify-center">
        <Link to={"/"}>
          <button
            onClick={logOut}
            type="button"
            className="flex flex-row items-center space-x-2 text-xs md:text-sm lg:text-md xl:text-lg md:w-32 lg:w-40 xl:w-48 p-2.5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg me-2 mb-2 "
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
        </Link>
      </div>
    </div>
  );
};

export default ListBar;

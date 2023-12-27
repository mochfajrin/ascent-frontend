/* eslint-disable react/prop-types */
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import noResultPng from "../../../assets/icons/no-results.png";
import "aos/dist/aos.css";

const TableCourse = ({ colom, dataTable, loading, setOpenModal }) => {
  const { labelNewData } = useSelector((state) => state.course);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const queryType = searchParams.get("type");
  const querySearch = searchParams.get("search");
  const getUrl = (id) => {
    if (queryType && querySearch) {
      return `${location.pathname}/delete-course/${id}?type=${queryType}&search=${querySearch}`;
    }
    if (queryType) {
      return `${location.pathname}/delete-course/${id}?type=${queryType}`;
    } else if (querySearch) {
      return `${location.pathname}/delete-course/${id}?search=${querySearch}`;
    } else {
      return `${location.pathname}/delete-course/${id}`;
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <div>
        <table className=" w-full mt-3 text-sm text-left text-gray-500 rtl:text-right  ">
          <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
            <tr>
              {colom.map((data, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {data.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dataTable.length === 0 ? (
              <tr>
                <td colSpan={colom.length}>
                  <div data-aos="zoom-in">
                    <img
                      src={noResultPng}
                      alt="ascent logo"
                      className="mx-auto w-48 py-28"
                    />
                  </div>
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan={colom.length}>
                  <img
                    src="/Logo_2.png"
                    alt="ascent logo"
                    className="mx-auto w-48 py-28 animate-bounce"
                  />
                </td>
              </tr>
            ) : (
              dataTable.map((data, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.courseCode ?? "-"}
                  </th>
                  <td className="px-6 py-4 space-x-3">
                    {data.category ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    <div className="flex flex-row space-x-1">
                      <div>{data.courseName ?? "-"}</div>
                      {i === 0 && labelNewData && (
                        <div className="font-bold text-yellow-300">New </div>
                      )}
                      {data.isDiscount == true ? (
                        <div className="font-bold text-red-600">Diskon! </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 space-x-3 font-bold ${
                      data.courseType === "Premium"
                        ? "text-[#489CFF]"
                        : "text-green-500"
                    }`}
                  >
                    {data.courseType ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    {data.courseLevel ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    Rp.
                    {data.coursePrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? "-"}
                  </td>
                  <td className="flex flex-row items-center px-6 py-2 space-x-3">
                    <Link to={`/dashboard/course-management/${data.id}`}>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300  font-medium rounded-lg text-xs px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <svg
                          className="w-4 h-4 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 14"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                          </g>
                        </svg>
                      </button>
                    </Link>

                    <Link>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Perbarui
                      </button>
                    </Link>
                    <Link
                      to={`/dashboard/course-management/chapter-course/${data.id}`}
                    >
                      <button
                        // onClick={setOpenModal}
                        type="button"
                        className="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Lihat chapter
                      </button>
                    </Link>
                    <Link to={getUrl(data.id)}>
                      <button
                        onClick={setOpenModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <svg
                          className="w-4 h-4  dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCourse;

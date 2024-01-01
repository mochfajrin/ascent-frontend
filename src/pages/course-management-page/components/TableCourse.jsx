/* eslint-disable react/prop-types */
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import courseNotFound from "../../../assets/icons/course-not-found.svg";

import "aos/dist/aos.css";
import { setForm } from "../../../redux/reducers/courseReducer";
import LoadingDataTable from "../../../components/LoadingDataTable";

const TableCourse = ({ colom, records, loading, setOpenModal }) => {
  const { labelNewData } = useSelector((state) => state.course);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { form } = useSelector((state) => state.course);
  const dispatch = useDispatch();

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
      <table className=" w-full mt-3 text-sm  text-center text-[#303A2B]  rtl:text-right border  ">
        <thead className="text-xs  text-white uppercase bg-[#0092A4]">
          <tr>
            {colom.map((data, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {data.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center">
          {records.length === 0 ? (
            <tr>
              <td colSpan={colom.length}>
                <div className="py-12">
                  <div data-aos="zoom-in">
                    <img
                      src={courseNotFound}
                      alt="ascent logo"
                      className="mx-auto w-64 pt-10"
                    />
                    <h1 className="mt-8 text-lg font-bold">
                      Data kelas tidak ditemukan
                    </h1>
                  </div>
                </div>
              </td>
            </tr>
          ) : loading ? (
            <tr>
              <td colSpan={colom.length}>
                <div className="flex flex-row justify-center my-36">
                  <LoadingDataTable />
                </div>
              </td>
            </tr>
          ) : (
            records.map((data, i) => (
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
                <td className="px-6 py-4 space-x-3">{data.category ?? "-"}</td>
                <td className="px-6 py-4 space-x-3 text-left ">
                  <div>{data.courseName ?? "-"}</div>
                  {i === 0 && labelNewData && (
                    <div className="font-bold text-yellow-300">New </div>
                  )}
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
                <td className="px-6 py-4 space-x-3 text-green-400">
                  Rp.
                  {data.coursePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? "-"}
                  ,00
                </td>
                <td className="flex flex-row items-center justify-center px-6 py-2 space-x-3">
                  <Link to={`/dashboard/course-management/${data.id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-[#E9D758] hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

                  <Link
                    to={`/dashboard/course-management/update-course/${data.id}`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          setForm({
                            ...form,
                            aboutCourse: "",
                            categoryId: "",
                            courseCode: "",
                            courseDiscountInPercent: "",
                            courseLevel: "",
                            coursePrice: data.coursePrice,
                            rating: "",
                            intendedFor: "",
                            telegramGroup: "",
                            courseName: "",
                          })
                        )
                      }
                      className="focus:outline-none text-white bg-[#424874] hover:bg-[#5d639b] focus:ring-4 focus:ring-[#424874] font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 "
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
                      className="focus:outline-none text-white bg-[#E9D758] hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Lihat chapter
                    </button>
                  </Link>
                  <Link to={getUrl(data.id)}>
                    <button
                      onClick={setOpenModal}
                      type="button"
                      className="focus:outline-none text-white bg-[#FF6B6B] hover:bg-red-500 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
  );
};

export default TableCourse;

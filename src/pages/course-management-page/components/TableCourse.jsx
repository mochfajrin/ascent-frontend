/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toastify } from "../../../utils/toastify";

const TableCourse = ({ colom, dataTable, loading, setOpenModal }) => {
  return (
    <div className="relative overflow-x-auto">
      <div>
        <table className="w-full mt-3 text-sm text-left text-gray-500 rtl:text-right  ">
          <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
            <tr>
              {colom.map((data, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {data.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="overflow-y-auto h-96">
            {loading ? (
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
                    {data.courseName ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    {data.courseType ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    {data.courseLevel ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    Rp.{data.coursePrice ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    <Link to={`/dashboard/course-management/${data.id}`}>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-[#6148FF] hover:bg-[#6856db] focus:ring-4 focus:ring-[rgb(188,181,235)] font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Lihat selengkapnya
                      </button>
                    </Link>
                    <Link to={`/dashboard/course-management/delete/${data.id}`}>
                      <button
                        onClick={setOpenModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Hapus
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

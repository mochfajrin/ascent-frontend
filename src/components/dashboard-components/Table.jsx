/* eslint-disable react/prop-types */
import { IoSearchSharp } from "react-icons/io5";

import SearchInput from "./SearchInput";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TableFilter from "./TableFilter";

const Table = ({ colom, dataTable }) => {
  const [searchInput, setSearchInput] = useState(false);

  const searchInputShow = () => {
    setSearchInput(true);
    AOS.init({
      once: true,
      duration: 300,
    });
    if (searchInput) {
      setSearchInput(false);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col justify-end space-y-5 max-md:w-96 lg:flex-row lg:items-center">
        <div className="flex flex-row items-center space-x-3">
          <div className="p-1">
            <TableFilter hideSearchInput={() => setSearchInput(false)} />
          </div>
          {searchInput ? (
            <div data-aos="fade-left">
              <SearchInput />
            </div>
          ) : (
            <button
              className="p-1 text-[#6148FF] text-2xl"
              onClick={searchInputShow}
            >
              <IoSearchSharp />
            </button>
          )}
        </div>
      </div>
      <table className="w-full mt-3 text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
          <tr>
            {colom.map((data, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {data.col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, i) => (
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
              <td className="px-6 py-4">{data.courseCategory ?? "-"}</td>
              <td className="px-6 py-4">{data.courseName ?? "-"}</td>
              <td className="px-6 py-4">{data.courseType ?? "-"}</td>
              <td className="px-6 py-4">{data.courseLevel ?? "-"}</td>
              <td className="px-6 py-4">{data.coursePrice ?? "-"}</td>
              <td className="px-6 py-4 space-x-3">
                <button>ubah</button>
                <button>hapus</button>
              </td>
            </tr>
          ))}
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

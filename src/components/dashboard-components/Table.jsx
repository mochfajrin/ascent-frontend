/* eslint-disable react/prop-types */
import { IoSearchSharp } from "react-icons/io5";

import SearchInput from "./SearchInput";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TableFilter from "./TableFilter";

const Table = ({ colom }) => {
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
      <div className="flex flex-col space-y-5 max-md:w-96 lg:flex-row lg:items-center justify-end">
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
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
          <tr>
            {colom.map((colName, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {colName.col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

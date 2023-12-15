/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import SearchInput from "./SearchInput";
import AOS from "aos";
import "aos/dist/aos.css";

import TableFilter from "./TableFilter";

const Table = ({ colom, dataTable, button, setOpenModal, filter }) => {
  const [searchInput, setSearchInput] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

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

  const searchInputHide = () => {
    if (searchInput) {
      setSearchInput(false);
      AOS.init({
        once: true,
        duration: 300,
      });
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <div className="flex-col lg:flex-row flex justify-end">
        <div className="flex flex-row items-center space-x-3">
          <div className="pt-2">
            <TableFilter
              hideSearchInput={searchInputHide}
              filter={filter}
              setFilter={(e) => setSelectedFilter(e.target.value)}
            />
          </div>
          {searchInput ? (
            <div data-aos="fade-right">
              <SearchInput setSearch={(e) => setSearch(e.target.value)} />
            </div>
          ) : (
            <button
              className="text-[#6148FF] text-2xl"
              onClick={searchInputShow}
            >
              <IoSearchSharp />
            </button>
          )}
        </div>
      </div>
      <div className="overflow-y-auto h-96">
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
          <tbody>
            {dataTable.filter((data) => {
              return (
                (selectedFilter === "" ||
                  Object.values(data).includes(selectedFilter)) &&
                (search.toLowerCase() === "" ||
                  Object.values(data).some(
                    (value) =>
                      value && value.toString().toLowerCase().includes(search)
                  ))
              );
            }).length === 0 ? (
              <tr>
                <td colSpan={colom.length + (button ? 3 : 0)}>
                  No results found.
                </td>
              </tr>
            ) : (
              dataTable
                .filter((data) => {
                  return (
                    (selectedFilter === "" ||
                      Object.values(data).includes(selectedFilter)) &&
                    (search.toLowerCase() === "" ||
                      Object.values(data).some(
                        (value) =>
                          value &&
                          value.toString().toLowerCase().includes(search)
                      ))
                  );
                })
                .map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {colom.slice(0, 6).map((column, j) => (
                      <td key={j} className="px-6 py-4">
                        {column.key.includes(".")
                          ? data[column.key.split(".")[0]]?.[
                              column.key.split(".")[1]
                            ]
                          : data[column.key] ?? "-"}
                      </td>
                    ))}

                    {button && (
                      <td className="px-6 py-4 space-x-3">
                        <Link to={`/dashboard/course-management/${data.id}`}>
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-[#6148FF] hover:bg-[#6856db] focus:ring-4 focus:ring-[rgb(188,181,235)] font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Lihat selengkapnya
                          </button>
                        </Link>

                        <button
                          onClick={setOpenModal}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Hapus
                        </button>
                      </td>
                    )}
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

import PropTypes from "prop-types";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = ({ defaultValue, setDefaultValue }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get("type");

  const [searchQuery, setSearchQuery] = useState("");

  let querySearch;
  if (defaultValue === true) {
    querySearch = "";
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (queryType) {
      navigate(
        `/dashboard/course-management?search=${searchQuery}&type=${queryType}`
      );
    } else {
      navigate(`/dashboard/course-management?search=${searchQuery}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-52 items-center justify-center"
    >
      <input
        onClick={setDefaultValue}
        value={querySearch}
        placeholder="cari kelas.."
        id="search_movie"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full text-black rounded-lg border-2 border-[#6148FF] bg-transparent px-5 py-2  outline-none backdrop-blur-md focus:ring-[#6148FF]"
      />
      <button
        type="submit"
        className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-full bg-slate-300 p-2 transition-colors"
      >
        <BsSearch className="h-5 w-5" />
      </button>
    </form>
  );
};
SearchInput.propTypes = {
  defaultValue: PropTypes.bool.isRequired,
  setDefaultValue: PropTypes.func.isRequired,
};

export default SearchInput;

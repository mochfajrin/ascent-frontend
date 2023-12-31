import PropTypes from "prop-types";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

const SearchInput = ({ defaultValue, setDefaultValue, placeholder }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const queryType = searchParams.get("type");
  const queryStatus = searchParams.get("paymentStatus");

  const [searchQuery, setSearchQuery] = useState("");

  let querySearch;
  if (defaultValue === true) {
    querySearch = "";
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (location.pathname == "/dashboard/course-management") {
      if (queryType) {
        navigate(
          `/dashboard/course-management?search=${searchQuery}&type=${queryType}`
        );
      } else {
        navigate(`/dashboard/course-management?search=${searchQuery}`);
      }
    }

    if (location.pathname == "/dashboard") {
      if (queryStatus) {
        navigate(
          `/dashboard?search=${searchQuery}&paymentStatus=${queryStatus}`
        );
      } else {
        navigate(`/dashboard?search=${searchQuery}`);
      }
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
        placeholder={placeholder}
        id="search_movie"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="min-w-full text-black rounded-lg border-2 border-[#0093A3] bg-transparent px-4 pr-12 py-2  outline-none  focus:ring-[#0093A3] focus:border-[#0093A3]"
      />
      <button
        type="submit"
        className="absolute bottom-1/2 h-11 w-10 right-[0.5px] rounded-r-lg translate-y-1/2  bg-[#0093A3] p-2.5"
      >
        <BsSearch className="h-5 w-5 text-white" />
      </button>
    </form>
  );
};
SearchInput.propTypes = {
  defaultValue: PropTypes.bool.isRequired,
  setDefaultValue: PropTypes.func.isRequired,
};

export default SearchInput;

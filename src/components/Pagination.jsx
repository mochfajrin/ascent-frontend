import PropTypes from "prop-types";

const Pagination = ({
  prefPage,
  numbers,
  changeCpage,
  curentPage,
  nextPage,
}) => {
  return (
    <nav
      aria-label="Page navigation example"
      className="flex flex-row justify-center mt-6 text-base"
    >
      <ul className="inline-flex -space-x-px shadow-md rounded-lg">
        <li>
          <a
            onClick={prefPage}
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-[#0093A3] hover:text-white bg-white border border-e-0 border-[#0093A3] rounded-s-lg hover:bg-[#0093A3] "
          >
            Previous
          </a>
        </li>

        {numbers.map((data, i) => (
          <li key={i}>
            <a
              onClick={() => changeCpage(data)}
              href="#"
              className={`flex ${
                curentPage === data
                  ? "bg-[#0093A3] text-white  "
                  : "bg-white   text-[#303A2B] "
              } items-center justify-center px-3 h-8 leading-tight  hover:text-white border border-[#0093A3] hover:bg-[#0093A3]  `}
            >
              {data}
            </a>
          </li>
        ))}

        <li>
          <a
            onClick={nextPage}
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-[#0093A3] hover:text-white bg-white border border-[#0093A3] rounded-e-lg hover:bg-[#0093A3]"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  prefPage: PropTypes.func.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeCpage: PropTypes.func.isRequired,
  curentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;

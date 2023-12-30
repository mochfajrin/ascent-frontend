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
      className="flex flex-row justify-center mt-6"
    >
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a
            onClick={prefPage}
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                curentPage === data ? "bg-gray-100" : "bg-white"
              } items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {data}
            </a>
          </li>
        ))}

        <li>
          <a
            onClick={nextPage}
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

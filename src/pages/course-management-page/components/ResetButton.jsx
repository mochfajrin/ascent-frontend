/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ResetButton = ({ setDefaultValue, routePath }) => {
  const navigate = useNavigate();

  const resetHabdle = () => {
    setDefaultValue();
    navigate(routePath);
  };
  return (
    <button
      onClick={resetHabdle}
      type="button"
      className="text-white bg-[#6C464E] hover:bg-[#492f35] focus:ring-4 focus:ring-[#6C464E] font-medium rounded-lg flex flex-row gap-2 text-sm p-3 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <svg
        className="w-5 h-5 dark:text-white"
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
          d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
        />
      </svg>
      Reset
    </button>
  );
};

export default ResetButton;

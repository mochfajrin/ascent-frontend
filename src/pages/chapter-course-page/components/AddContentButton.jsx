import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { setFormContent } from "../../../redux/reducers/contentReducer";

const AddContentButton = ({ setOpenModal, routePath }) => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.chapter);

  const openModal = () => {
    dispatch(
      setFormContent({
        ...form,
        contentTitle: "",
        contentUrl: "",
        videoDuration: "",
      })
    );
    setOpenModal();
  };
  return (
    <Link to={routePath}>
      <button
        onClick={openModal}
        type="button"
        className="flex flex-row items-center gap-2 text-white bg-[#0092A4] hover:bg-[#469eaa] focus:ring-[#0092A4] focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        <svg
          className="w-6 h-6 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Tambah konten
      </button>
    </Link>
  );
};

AddContentButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  routePath: PropTypes.string.isRequired,
};

export default AddContentButton;

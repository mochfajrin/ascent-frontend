import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { setFormChapter } from "../../../redux/reducers/chapterReducer";

const UpdateButton = ({ setOpenModal, buttonText }) => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.chapter);

  const openModal = () => {
    dispatch(setFormChapter({ ...form, chapterTitle: "" }));
    setOpenModal();
  };
  return (
    <button
      onClick={() => openModal()}
      type="button"
      className="flex flex-row items-center gap-2 text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {buttonText}
    </button>
  );
};

UpdateButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
UpdateButton.defaultProps = {
  setOpenModal: () => {},
};

export default UpdateButton;

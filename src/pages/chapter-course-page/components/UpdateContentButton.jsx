import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { setFormContent } from "../../../redux/reducers/contentReducer";

const UpdateContentButton = ({ setOpenModal, buttonText }) => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.content);

  const openModal = () => {
    dispatch(
      setFormContent({
        ...form,
        contentTitle: undefined,
        contentUrl: "",
        videoDuration: undefined,
      })
    );
    setOpenModal();
  };
  return (
    <button
      onClick={openModal}
      type="button"
      className="flex flex-row items-center gap-2 text-white bg-[#424874] hover:bg-[#5d639b] focus:ring-4 focus:ring-[#424874] focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {buttonText}
    </button>
  );
};

UpdateContentButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
UpdateContentButton.defaultProps = {
  setOpenModal: () => {},
};

export default UpdateContentButton;

import { Modal } from "flowbite-react";
import PropTypes from "prop-types";

import inbox from "../assets/icons/inbox.png";

const AddDataLoading = ({ loadingText }) => {
  return (
    <>
      <Modal show={true} size="md" popup>
        <div
          role="status"
          className="fixed -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <div className="flex flex-col items-center animate-bounce ">
            <img src={inbox} alt="upload image" className="w-40" />
            <p className="mt-3 text-2xl font-semibold  text-white">
              {loadingText}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

AddDataLoading.propTypes = {
  loadingText: PropTypes.string.isRequired,
};

export default AddDataLoading;

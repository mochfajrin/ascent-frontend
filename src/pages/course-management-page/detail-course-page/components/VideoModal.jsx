/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

import ReactPlayer from "react-player/youtube";

const VideoModal = ({ openModal, setCloseModal, data }) => {
  return (
    <Modal dismissible show={openModal} onClose={setCloseModal} size={"5xl"}>
      <Modal.Header>{data.contentTitle}</Modal.Header>
      <Modal.Body className="w-full h-full">
        <div className="h-[550px] ">
          <ReactPlayer
            className="react-player "
            url={`https://www.youtube.com/watch?v=${data.youtubeId}`}
            width="100%"
            height="100%"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;

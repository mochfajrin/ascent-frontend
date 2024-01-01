/* eslint-disable react/prop-types */

import { useState } from "react";

import VideoModal from "./VideoModal";
import noData from "../../../../assets/icons/no-data.png";

const ChapterList = ({ dataChapter }) => {
  const [openModal, setOpenModal] = useState(false);
  const [contentData, setContentData] = useState([]);

  const sendContentData = (data) => {
    setOpenModal(true);
    setContentData(data);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Bab kelas</h1>
      <div className="overflow-y-auto h-[500px] w-full text-xl mt-3">
        {dataChapter.map((data, i) => (
          <div key={i}>
            <div>
              <h1 className="text-lg font-semibold text-[#0092A4]">
                {data.chapterTitle}
              </h1>
            </div>
            <div>
              {data.contents.length === 0 ? (
                <div className="text-base flex flex-row items-center space-x-1">
                  <div>Belum ada konten</div>
                  <img className="w-7" src={noData} alt="" />
                </div>
              ) : (
                data.contents.map((data, i) => (
                  <a
                    href="#"
                    onClick={() => sendContentData(data)}
                    key={i}
                    className="border-b p-3 flex flex-row space-x-3 hover:bg-[#0092A4] hover:text-white rounded-md  "
                  >
                    <span>{i + 1}</span>
                    <h1>{data.contentTitle}</h1>
                    <div>
                      <svg
                        className="w-6 h-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"
                        />
                      </svg>
                    </div>
                  </a>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <VideoModal
        data={contentData}
        openModal={openModal}
        setCloseModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default ChapterList;

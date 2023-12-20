/* eslint-disable react/prop-types */

import { useState } from "react";

import VideoModal from "./VideoModal";

const ChapterList = ({ dataChapter }) => {
  const [openModal, setOpenModal] = useState(false);
  const [contentData, setContentData] = useState([]);

  const sendContentData = (data) => {
    setOpenModal(true);
    setContentData(data);
  };

  return (
    <>
      <h1 className="text-3xl">Bab kelas</h1>
      <div className="overflow-y-auto h-[500px] w-full text-xl mt-3">
        {dataChapter.map((data, i) => (
          <div key={i}>
            <div>
              <h1 className="text-lg font-semibold">{data.chapterTitle}</h1>
            </div>
            <div>
              {data.contents.map((data, i) => (
                <a
                  href="#"
                  onClick={() => sendContentData(data)}
                  key={i}
                  className="border-b p-2 flex flex-row space-x-3 hover:bg-slate-200 hover:text-[#6148FF]  "
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
              ))}
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

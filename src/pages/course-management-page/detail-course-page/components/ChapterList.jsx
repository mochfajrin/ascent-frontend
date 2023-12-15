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
      <div className="overflow-y-auto h-[600px] text-xl mt-3">
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
                  <div className="">
                    <svg
                      className="w-6 h-6   "
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
                        d="M1 5h18M1 5v14h18V5M1 5V1h18v4M5 5l3-4m1.215 4 3-4m1.215 4 3-4M8.007 8v8l5.416-4-5.416-4Z"
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

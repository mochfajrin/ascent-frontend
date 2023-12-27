import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
import ReactPlayer from "react-player/youtube";

import { getCourseDataById } from "../../../redux/actions/courseAction";
import CourseDetailSkeleton from "../detail-course-page/components/CourseDetailSkeleton";
import {
  getChapterData,
  createChapterData,
  deleteChapterData,
} from "../../../redux/actions/chapterAction";
import AddCourseButton from "./components/AddChapterButton";
import ModalAddChapter from "./components/ModalAddChapter";
import AddDataLoading from "../../../components/AddDataLoading";
import ValidationDeleteModal from "../../../components/ValidationDeleteModal";

const ChapterCoursePage = () => {
  const dispatch = useDispatch();
  const { courseid, chapterId } = useParams();

  const [loading, setLoading] = useState(true);
  const [addChapterLoading, setAddChapterLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [refresh, toggleRefresh] = useState(false);

  const { courseData } = useSelector((state) => state.course);
  const { chapterData } = useSelector((state) => state.chapter);

  const chaptersData = chapterData.filter((data) => data.courseId == courseid);

  const addChapter = () => {
    dispatch(
      createChapterData(setAddChapterLoading, courseid, () => {
        toggleRefresh((prev) => !prev);
        setOpenModal(false);
      })
    );
  };

  const deletingCourse = () => {
    dispatch(
      deleteChapterData(chapterId, setLoading, () => {
        toggleRefresh((prev) => !prev);
        setOpenDeleteModal(false);
      })
    );
  };

  useEffect(() => {
    dispatch(getCourseDataById(setLoading, courseid));
    dispatch(getChapterData(setLoading));
  }, [dispatch, courseid, refresh]);

  return (
    <>
      {loading ? (
        <CourseDetailSkeleton />
      ) : (
        <div>
          <ModalAddChapter
            openModal={openModal}
            addChapter={addChapter}
            closeModal={() => setOpenModal(false)}
          />
          <ValidationDeleteModal
            openModal={openDeleteModal}
            setCloseModal={() => setOpenDeleteModal(false)}
            toggleDeleting={deletingCourse}
            validationText={"Apakah anda yakin ingin menghapus bab ini ?"}
          />
          {addChapterLoading ? (
            <AddDataLoading loadingText={"Mengunggah data bab kelas"} />
          ) : (
            <div className="space-y-5">
              <div className="text-4xl font-bold">Bab kelas</div>
              <h1 className="text-2xl font-semibold">
                {courseData.courseName}
              </h1>
              <Link
                to={"/dashboard/course-management"}
                className="text-black flex flex-row items-center space-x-2 mb-4  w-24"
              >
                <svg
                  className="w-4 h-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>

                <p className="text-lg"> Kembali</p>
              </Link>
              <div className="flex flex-row justify-end">
                <AddCourseButton setOpenModal={() => setOpenModal(true)} />
              </div>
              <Accordion className="mt-3">
                {chaptersData.map((data, i) => (
                  <Accordion.Panel key={i}>
                    <Accordion.Title>
                      <div className="flex flex-row items-center space-x-6">
                        <div className="text-lg font-semibold">
                          {data.chapterTitle}
                        </div>
                      </div>
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="flex flex-row space-x-2 justify-end ">
                        <AddCourseButton />
                        <AddCourseButton />
                        <Link
                          to={`/dashboard/course-management/chapter-course/${courseid}/delete-chapter/${data.id}`}
                        >
                          <button
                            onClick={() => setOpenDeleteModal(true)}
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-3  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            <svg
                              className="w-5 h-5  dark:text-white"
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
                                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                              />
                            </svg>
                          </button>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-5 pt-4">
                        {data.contents.map((data, i) => (
                          <div key={i}>
                            <div className="h-[450px] ">
                              <ReactPlayer
                                className="react-player "
                                url={`https://www.youtube.com/watch?v=${data.youtubeId}`}
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <h1 className="text-xl mt-2 font-semibold">
                              {data.contentTitle}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChapterCoursePage;

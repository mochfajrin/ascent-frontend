import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Accordion } from "flowbite-react";
import ReactPlayer from "react-player/youtube";

import { getCourseDataById } from "../../redux/actions/courseAction";
import CourseDetailSkeleton from "../course-management-page/detail-course-page/components/CourseDetailSkeleton";
import {
  getChapterData,
  createChapterData,
  deleteChapterData,
  updateChapterData,
} from "../../redux/actions/chapterAction";
import {
  createContentData,
  deleteContentData,
  updateContentData,
} from "../../redux/actions/contentAction";
import ModalAddChapter from "./components/ModalAddChapter";
import AddDataLoading from "../../components/AddDataLoading";
import ValidationDeleteModal from "../../components/ValidationDeleteModal";
import AddContentButton from "./components/AddContentButton";
import ModalAddContent from "./components/ModalAddContent";
import AddChapterButton from "./components/AddButton";
import UpdateButton from "./components/UpdateContentButton";
import ModalUpdateChapter from "./components/ModalUpdateChapter";
import noContent from "../../../src/assets/icons/no-content.png";
import chapterIcon from "../../assets/icons/chapter.png";
import UpdateContentButton from "./components/UpdateContentButton";
import ModalUpdateContent from "./components/ModalUpdateContent";
import dataNotFound from "../../assets/icons/data-not-found.svg";
import LoadingSkeletonChapter from "./components/LoadingSkeletonChapterPage";
const ChapterCoursePage = () => {
  const dispatch = useDispatch();
  const { courseId, chapterId, contentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [openAddChapterModal, setOpenAddChapterModal] = useState(false);
  const [openAddContentModal, setOpenAddContentModal] = useState(false);
  const [openUpdateContentModal, setOpenUpdateContentModal] = useState(false);
  const [openUpdateChapterModal, setOpenUpdateChapterModal] = useState(false);

  console.log(openUpdateContentModal);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [refresh, toggleRefresh] = useState(false);

  const { courseData } = useSelector((state) => state.course);
  const { chapterData } = useSelector((state) => state.chapter);

  const chaptersData = chapterData.filter((data) => data.courseId == courseId);

  const deleteHandling = () => {
    if (
      location.pathname ===
      `/dashboard/course-management/chapter-course/${courseId}/delete-chapter/${chapterId}`
    ) {
      return dispatch(
        deleteChapterData(chapterId, setLoading, () => {
          toggleRefresh((prev) => !prev);
          setOpenDeleteModal(false);
        })
      );
    } else if (
      location.pathname ===
      `/dashboard/course-management/chapter-course/${courseId}/delete-content/${contentId}`
    ) {
      return dispatch(
        deleteContentData(contentId, setLoading, () => {
          toggleRefresh((prev) => !prev);
          setOpenDeleteModal(false);
        })
      );
    }
  };

  const cancelDeleteChapter = () => {
    setOpenDeleteModal(false);
    navigate(`/dashboard/course-management/chapter-course/${courseId}`);
  };

  const cancelAddContent = () => {
    setOpenAddContentModal(false);
    navigate(`/dashboard/course-management/chapter-course/${courseId}`);
  };

  useEffect(() => {
    dispatch(getCourseDataById(setLoading, courseId));
    dispatch(getChapterData(setLoading));
  }, [dispatch, courseId, refresh]);

  return (
    <>
      {loading ? (
        <LoadingSkeletonChapter />
      ) : (
        <div>
          <ModalAddContent
            openModal={openAddContentModal}
            closeModal={cancelAddContent}
            addContent={() =>
              dispatch(
                createContentData(setAddLoading, chapterId, () => {
                  toggleRefresh((prev) => !prev);
                  setOpenAddContentModal(false);
                  navigate(
                    `/dashboard/course-management/chapter-course/${courseId}`
                  );
                })
              )
            }
          />
          <ModalAddChapter
            openModal={openAddChapterModal}
            addChapter={() =>
              dispatch(
                createChapterData(setAddLoading, courseId, () => {
                  toggleRefresh((prev) => !prev);
                  setOpenAddChapterModal(false);
                })
              )
            }
            closeModal={() => setOpenAddChapterModal(false)}
          />
          <ModalUpdateChapter
            openModal={openUpdateChapterModal}
            updateChapter={() =>
              dispatch(
                updateChapterData(setUpdateLoading, chapterId, () => {
                  toggleRefresh((prev) => !prev);
                  setOpenUpdateChapterModal(false);
                  navigate(
                    `/dashboard/course-management/chapter-course/${courseId}`
                  );
                })
              )
            }
            closeModal={() => setOpenUpdateChapterModal(false)}
          />

          <ModalUpdateContent
            openModal={openUpdateContentModal}
            updateContent={() =>
              dispatch(
                updateContentData(
                  setUpdateLoading,
                  chapterId,
                  contentId,
                  () => {
                    toggleRefresh((prev) => !prev);
                    setOpenUpdateContentModal(false);
                    navigate(
                      `/dashboard/course-management/chapter-course/${courseId}`
                    );
                  }
                )
              )
            }
            closeModal={() => setOpenUpdateContentModal(false)}
          />
          <ValidationDeleteModal
            openModal={openDeleteModal}
            setCloseModal={cancelDeleteChapter}
            toggleDeleting={deleteHandling}
            validationText={`${
              location.pathname ===
              `/dashboard/course-management/chapter-course/${courseId}/delete-chapter/${chapterId}`
                ? "Apakah anda yakin ingin menghapus bab ini "
                : "Apakah anda yakin ingin menghapus konten ini "
            } ?`}
          />
          {addLoading ? (
            <AddDataLoading loadingText={"Mengunggah data kelas"} />
          ) : updateLoading ? (
            <AddDataLoading loadingText={"Memperbarui data kelas"} />
          ) : (
            <div className="space-y-5">
              <div className="text-4xl font-bold flex flex-row items-center space-x-3">
                <div>
                  Bab <span className="text-[#0092A4]">kelas</span>{" "}
                </div>
                <span>
                  <img className="w-9" src={chapterIcon} alt="" />
                </span>
              </div>
              <h1 className="text-2xl font-semibold">
                {courseData.courseName}
              </h1>
              <Link
                to={"/dashboard/course-management"}
                className="hover:text-[#57b7c4]  text-[#0092A4] flex flex-row items-center space-x-2 mb-4  w-24"
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
                <AddChapterButton
                  setOpenModal={() => setOpenAddChapterModal(true)}
                  buttonText={"Tambah bab"}
                />
              </div>
              {chaptersData.length === 0 ? (
                <div className="flex flex-row justify-center mt-20 mb-9">
                  <div className="text-center">
                    <img className="w-96 mt-10" src={dataNotFound} alt="" />
                    <div className="text-2xl font-semibold mt-10">
                      {" "}
                      Belum ada bab kelas
                    </div>
                  </div>
                </div>
              ) : (
                chaptersData.map((dataChapter, i) => (
                  <Accordion key={i} className="mt-3  ">
                    <Accordion.Panel className=" border-0">
                      <Accordion.Title className="bg-[#0092A4] text-white hover:bg-[#57b7c4] rounded-lg">
                        <div className="flex flex-row items-center space-x-6 text-white">
                          <div className="text-lg font-semibold">
                            {dataChapter.chapterTitle}
                          </div>
                        </div>
                      </Accordion.Title>
                      <Accordion.Content>
                        <div className="flex flex-row space-x-2 justify-end ">
                          <AddContentButton
                            setOpenModal={() => setOpenAddContentModal(true)}
                            routePath={`/dashboard/course-management/chapter-course/${courseId}/add-content/${dataChapter.id}`}
                          />
                          <Link
                            to={`/dashboard/course-management/chapter-course/${courseId}/update-chapter/${dataChapter.id}`}
                          >
                            <UpdateButton
                              buttonText={"Perbarui bab"}
                              setOpenModal={() =>
                                setOpenUpdateChapterModal(true)
                              }
                            />
                          </Link>
                          <Link
                            to={`/dashboard/course-management/chapter-course/${courseId}/delete-chapter/${dataChapter.id}`}
                          >
                            <button
                              onClick={() => setOpenDeleteModal(true)}
                              type="button"
                              className="focus:outline-none text-sm flex flex-row gap-2 text-white bg-[#FF6B6B] hover:bg-red-500 focus:ring-2 focus:ring-red-300 font-medium rounded-lg  px-3 py-3  "
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
                              Hapus bab kelas
                            </button>
                          </Link>
                        </div>
                        {dataChapter.contents.length === 0 ? (
                          // <div className="text-lg"> Belum ada konten</div>
                          <div className="flex flex-row justify-center mt-20 mb-9">
                            <div className="text-center">
                              <img className="w-72" src={dataNotFound} alt="" />
                              <div className="text-2xl font-semibold mt-10">
                                {" "}
                                Belum ada konten
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-5 pt-4">
                            {dataChapter.contents.map((data, i) => (
                              <div key={i}>
                                <div className="h-[450px] ">
                                  <ReactPlayer
                                    className="react-player "
                                    url={`https://www.youtube.com/watch?v=${data.youtubeId}`}
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <div className="flex flex-row  mt-4 items-center justify-between">
                                  <div className="flex flex-row space-x-2 w-[400px] items-center">
                                    <h1 className="text-xl font-semibold ">
                                      {data.contentTitle}
                                    </h1>
                                  </div>
                                  <h1 className="text-md font-normal">
                                    {data.duration} menit
                                  </h1>
                                  <div className="space-x-2 flex flex-row">
                                    <div>
                                      <Link
                                        to={`/dashboard/course-management/chapter-course/${courseId}/update-content/${data.id}/${dataChapter.id}`}
                                      >
                                        <UpdateContentButton
                                          setOpenModal={() =>
                                            setOpenUpdateContentModal(true)
                                          }
                                          buttonText={"Update konten"}
                                        />
                                      </Link>
                                    </div>

                                    <Link
                                      to={`/dashboard/course-management/chapter-course/${courseId}/delete-content/${data.id}`}
                                    >
                                      <button
                                        onClick={() => setOpenDeleteModal(true)}
                                        type="button"
                                        className="focus:outline-none text-white bg-[#FF6B6B] hover:bg-red-500 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-3  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChapterCoursePage;

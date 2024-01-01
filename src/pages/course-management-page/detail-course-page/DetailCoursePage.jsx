import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCourseDataById } from "../../../redux/actions/courseAction";
import CourseDetailSkeleton from "./components/CourseDetailSkeleton";
import ChapterList from "./components/ChapterList";
import notAddedData from "../../../assets/icons/not-added-data-yet.svg";

const DetailCoursePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const { courseData } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseDataById(setLoading, id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <CourseDetailSkeleton />
      ) : (
        <div>
          <div className="text-4xl font-bold">
            Detail <span className="text-[#0092A4]">Kelas</span>
          </div>
          <Link
            to={"/dashboard/course-management"}
            className=" hover:text-[#57b7c4]  text-[#0092A4] flex flex-row items-center space-x-2 mb-4 mt-10"
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
          <div className="flex flex-row  justify-between items-center  bg-white w-full p-6  rounded-lg shadow-lg">
            <div className="  max-w-[800px] space-y-5">
              <div className="space-y-2">
                <div>
                  <h1 className="text-3xl font-black">
                    {courseData.courseName}
                  </h1>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="font-semibold">{courseData.courseLevel} </div>
                  <div>| </div>
                  <div
                    className={`${
                      courseData.courseType === "Premium"
                        ? "text-[#489CFF]"
                        : "text-green-500"
                    }`}
                  >
                    {courseData.courseType}
                  </div>{" "}
                  <div>| </div>
                  <div className="flex flex-row items-center space-x-1">
                    <svg
                      className="w-5 h-5 text-yellow-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <div>{courseData.rating}</div>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-[550px] h-96">
                <img
                  src={courseData.image}
                  alt="course image"
                  className="shadow-lg rounded-lg w-full h-full"
                />
              </div>

              <div className="text-lg">Rp.{courseData.coursePrice},00</div>
              <div className="w-[600px]">
                <h1 className="text-lg font-semibold">Tentang kelas</h1>
                <p className="text-justify">{courseData.aboutCourse}</p>
              </div>
            </div>
            {courseData.chapters.length === 0 ? (
              <div className="w-[700px] ">
                <div className="w-96 text-center">
                  <img className="w-96" src={notAddedData} alt="" />
                  <div className="text-lg font-bold">Belum ada bab kelas</div>
                </div>
              </div>
            ) : (
              <div className="w-[800px]">
                <ChapterList dataChapter={courseData.chapters} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCoursePage;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCourseDataById } from "../../../redux/actions/courseAction";
import CourseDetailSkeleton from "./components/CourseDetailSkeleton";
import ChapterList from "./components/ChapterList";

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
          <div className="text-4xl font-bold">Detail Kelas</div>
          <Link
            to={"/dashboard/course-management"}
            className="text-black flex flex-row items-center space-x-2 mb-4 mt-10"
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
          <div className="flex flex-row  justify-between items-center bg-slate-50 w-full p-10 px-16 rounded-lg shadow-xl">
            <div className=" space-y-8 max-w-[800px]">
              <div>
                <h1 className="text-3xl font-black">{courseData.courseName}</h1>
                <p className="mt-4">
                  <span className="font-semibold">
                    {courseData.courseLevel}{" "}
                  </span>
                  | {courseData.courseType}
                </p>
              </div>
              <div className="mt-3 w-[550px] h-96">
                <img
                  src={courseData.image}
                  alt="course image"
                  className="shadow-lg rounded-lg w-full h-full"
                />
              </div>
            </div>
            <div>
              <ChapterList dataChapter={courseData.chapters} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCoursePage;

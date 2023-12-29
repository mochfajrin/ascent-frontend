import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { updateCourseData } from "../../../redux/actions/courseAction";
import AddDataLoading from "../../../components/AddDataLoading";
import FormUpdateCourse from "./components/FormUpdateCourse";
import { getCourseDataById } from "../../../redux/actions/courseAction";
import CourseDetailSkeleton from "../detail-course-page/components/CourseDetailSkeleton";
import ValidationUpdateModal from "./components/ValidationUpdateModal";

const UpdateCoursePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [imageFile, setImageFile] = useState(null);
  const [loadingAddData, setLoadingAddData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showValidationUpdateModal, setShowValidationUpdateModal] =
    useState(false);

  const { courseData } = useSelector((state) => state.course);

  const updateHandle = () => {
    dispatch(
      updateCourseData(imageFile, navigate, setLoadingAddData, courseId)
    );
    setShowValidationUpdateModal(false);
  };

  useEffect(() => {
    dispatch(getCourseDataById(setLoading, courseId));
  }, [dispatch, courseId]);

  return (
    <>
      {loading ? (
        <CourseDetailSkeleton />
      ) : (
        <div>
          {loadingAddData && (
            <AddDataLoading loadingText={"Mengunggah data baru kelas"} />
          )}
          <ValidationUpdateModal
            openModal={showValidationUpdateModal}
            validationText={"Apakah anda ingin menyimpan perubahan ?"}
            setCloseModal={() => setShowValidationUpdateModal(false)}
            toggleUpdate={updateHandle}
          />
          <h1 className="text-3xl font-bold">Update data kelas</h1>
          <Link
            to={"/dashboard/course-management"}
            className="text-black flex flex-row items-center space-x-2 mt-1 mb-1"
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
          <div className="bg-slate-50 w-full p-4 rounded-lg shadow-lg">
            <FormUpdateCourse
              setImageFile={setImageFile}
              courseData={courseData}
            />
            <div className="flex justify-end">
              <Link>
                <button
                  // onClick={() =>
                  //   dispatch(
                  //     updateCourseData(
                  //       imageFile,
                  //       navigate,
                  //       setLoadingAddData,
                  //       courseId
                  //     )
                  //   )
                  // }
                  onClick={() => setShowValidationUpdateModal(true)}
                  type="button"
                  className="focus:outline-none text-white bg-purple-700 mt-1  hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Simpan
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateCoursePage;

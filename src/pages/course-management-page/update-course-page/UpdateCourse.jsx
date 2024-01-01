import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { updateCourseData } from "../../../redux/actions/courseAction";
import AddDataLoading from "../../../components/AddDataLoading";
import FormUpdateCourse from "./components/FormUpdateCourse";
import { getCourseDataById } from "../../../redux/actions/courseAction";
import ValidationUpdateModal from "./components/ValidationUpdateModal";
import LoadingSkeletonUpdateCourse from "./components/LoadingSkeletonUpdateCourse";

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
        // <CourseDetailSkeleton />
        <LoadingSkeletonUpdateCourse />
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
          <h1 className="text-3xl font-bold">
            Update <span className="text-[#0092A4]">data kelas</span>
          </h1>
          <Link
            to={"/dashboard/course-management"}
            className="flex flex-row w-24 hover:text-[#57b7c4]  text-[#0092A4] items-center mt-1 mb-1 space-x-2 "
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
          <div className="w-full p-4 rounded-lg shadow-lg bg-slate-50">
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
                  className="focus:outline-none text-white bg-[#0092A4] hover:bg-[#469eaa] focus:ring-[#0092A4] focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
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

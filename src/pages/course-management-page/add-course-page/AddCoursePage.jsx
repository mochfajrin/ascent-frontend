import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import FormAddCourse from "./components/FormAddCourse";
import { createCourseData } from "../../../redux/actions/courseAction";
import AddDataLoading from "../../../components/AddDataLoading";

const AddCoursePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <AddDataLoading loadingText={"Mengunggah data kelas"} />}
      <h1 className="text-3xl font-bold">
        Tambah <span className="text-[#0092A4]">kelas</span>
      </h1>
      <Link
        to={"/dashboard/course-management"}
        className="hover:text-[#57b7c4]  text-[#0092A4] w-28 flex flex-row items-center space-x-2 mt-1 mb-1"
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
      <div className="bg-white w-full p-3 rounded-lg shadow-lg mt-4">
        <FormAddCourse setImageFile={setImageFile} />
        <div className="flex justify-end">
          <Link>
            <button
              onClick={() =>
                dispatch(createCourseData(imageFile, navigate, setLoading))
              }
              type="button"
              className="focus:outline-none text-white  focus:ring-4 bg-[#0092A4] hover:bg-[#469eaa] focus:ring-[#0092A4] font-medium rounded-lg text-lg px-5 py-2.5  "
            >
              Simpan
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddCoursePage;

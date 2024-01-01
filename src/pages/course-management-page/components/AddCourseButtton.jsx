import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../../redux/reducers/courseReducer";

const AddCourseButton = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.course);
  return (
    <Link to={"/dashboard/course-management/add-course"}>
      <button
        onClick={() =>
          dispatch(
            setForm({
              ...form,
              aboutCourse: "",
              categoryId: "",
              courseCode: "",
              courseDiscountInPercent: 0,
              courseLevel: "",
              coursePrice: 0,
              rating: 0,
              intendedFor: "",
              telegramGroup: "",
              courseName: "",
            })
          )
        }
        type="button"
        className="flex flex-row items-center gap-2 text-white bg-[#0092A4] hover:bg-[#469eaa] focus:ring-[#0092A4] focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
      >
        <svg
          className="w-6 h-6 "
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
            d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Tambah
      </button>
    </Link>
  );
};

export default AddCourseButton;

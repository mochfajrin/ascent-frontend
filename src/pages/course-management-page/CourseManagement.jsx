import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import AOS from "aos";

import { SiGoogleclassroom } from "react-icons/si";

import ValidationDeleteModal from "../../components/ValidationDeleteModal";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import TableCourse from "./components/TableCourse";
import {
  getCourseData,
  getFilterCourseData,
  deleteCourseData,
  getCourseDataById,
} from "../../redux/actions/courseAction";

import SearchInput from "../../components/SearchInput";
import TableFilter from "../../components/TableFilter";
import AddCourseButton from "./components/AddCourseButtton";
import ResetButton from "./components/ResetButton";

const CourseManagement = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [refresh, toggleRefresh] = useState(false);
  const [defaultValue, setDefaultValue] = useState(false);
  const { courseData } = useSelector((state) => state.course);

  const navigateWithQuery = () => {
    const queryType = searchParams.get("type");
    const querySearch = searchParams.get("search");

    if (queryType && querySearch) {
      navigate(
        `/dashboard/course-management?type=${queryType}&search=${querySearch}`
      );
    } else if (queryType) {
      navigate(`/dashboard/course-management?type=${queryType}`);
    } else if (querySearch) {
      navigate(`/dashboard/course-management?search=${querySearch}`);
    } else {
      navigate("/dashboard/course-management");
    }
  };

  const deletingCourse = () => {
    dispatch(
      deleteCourseData(id, setLoading, () => {
        toggleRefresh((prev) => !prev);
        setOpenModal(false);
      })
    );
    navigateWithQuery();
  };

  const cancelDeleteCourse = () => {
    setOpenModal(false);
    navigateWithQuery();
  };

  useEffect(() => {
    AOS.init({ duration: 300 });

    const fetchData = () => {
      const queryType = searchParams.get("type");
      const querySearch = searchParams.get("search");

      if (queryType && querySearch) {
        dispatch(
          getFilterCourseData({
            filterData: queryType,
            queryData: querySearch,
            setLoadingTable,
          })
        );
      } else if (queryType) {
        dispatch(
          getFilterCourseData({ filterData: queryType, setLoadingTable })
        );
      } else if (querySearch) {
        dispatch(
          getFilterCourseData({ queryData: querySearch, setLoadingTable })
        );
      } else {
        dispatch(getCourseData(setLoading));
      }
    };

    fetchData();
  }, [dispatch, refresh, searchParams]);

  const tableColumns = [
    { label: "KODE KELAS" },
    { label: "KATEGORI" },
    { label: "NAMA KELAS" },
    { label: "TIPE KELAS" },
    { label: "LEVEL" },
    { label: "HARGA KELAS" },
    { label: "AkSI" },
  ];
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <ValidationDeleteModal
            openModal={openModal}
            setCloseModal={cancelDeleteCourse}
            toggleDeleting={deletingCourse}
            validationText={"Apakah anda yakin ingin menghapus kelas ini ?"}
          />
          <div className="  max-md:ml-8 ">
            <div className="flex dlex-row items-center space-x-3">
              <p className="pb-0 text-xl font-bold md:text-2xl  ">
                Kelola Kelas
              </p>
              <SiGoogleclassroom className="text-3xl text-lime-700" />
            </div>
            <div className="flex flex-row space-x-3 justify-end ">
              <AddCourseButton />
              <TableFilter
                setDefaultValue={() => setDefaultValue(false)}
                defaultValue={defaultValue}
                filter={["Premium", "Free"]}
              />
              <SearchInput
                defaultValue={defaultValue}
                setDefaultValue={() => setDefaultValue(false)}
                placeholder={"Cari kelas..."}
              />
              <ResetButton
                routePath={"/dashboard/course-management"}
                setDefaultValue={() => setDefaultValue(true)}
              />
            </div>

            <TableCourse
              colom={tableColumns}
              dataTable={courseData}
              setOpenModal={() => setOpenModal(true)}
              loading={loadingTable}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseManagement;

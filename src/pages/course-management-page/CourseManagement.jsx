import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AOS from "aos";

import { SiGoogleclassroom } from "react-icons/si";

import ValidationDeleteModal from "../../components/ValidationDeleteModal";
import TableCourse from "./components/TableCourse";
import {
  getCourseData,
  getFilterCourseData,
  deleteCourseData,
} from "../../redux/actions/courseAction";

import SearchInput from "../../components/SearchInput";
import TableFilter from "../../components/TableFilter";
import AddCourseButton from "./components/AddCourseButtton";
import ResetButton from "./components/ResetButton";
import Pagination from "../../components/Pagination";
import LoadingSkeletonCourseManagementPage from "./components/LoadingSkeletonCourseManagementPage";

const CourseManagement = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [refresh, toggleRefresh] = useState(false);
  const [defaultValue, setDefaultValue] = useState(false);
  const [curentPage, setCurrentPage] = useState(1);

  const { courseData } = useSelector((state) => state.course);

  const recordsPerPage = 9;
  const lastIndex = curentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Array.isArray(courseData)
    ? courseData.slice(firstIndex, lastIndex)
    : [];

  const npage = Array.isArray(courseData)
    ? Math.ceil(courseData.length / recordsPerPage)
    : [];

  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prefPage = () => {
    if (curentPage !== 1) {
      setCurrentPage(curentPage - 1);
    }
  };

  const nextPage = () => {
    if (curentPage !== npage) {
      setCurrentPage(curentPage + 1);
    }
  };

  const changeCpage = (i) => {
    setCurrentPage(i);
  };

  const settingDefaultValue = () => {
    setDefaultValue(false);
    setCurrentPage(1);
    // navigate("/dashboard");
  };

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
      dispatch(getFilterCourseData({ filterData: queryType, setLoadingTable }));
    } else if (querySearch) {
      dispatch(
        getFilterCourseData({ queryData: querySearch, setLoadingTable })
      );
    } else {
      dispatch(getCourseData(setLoading));
    }
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
        <LoadingSkeletonCourseManagementPage />
      ) : (
        <div>
          <ValidationDeleteModal
            openModal={openModal}
            setCloseModal={cancelDeleteCourse}
            toggleDeleting={deletingCourse}
            validationText={"Apakah anda yakin ingin menghapus kelas ini ?"}
          />
          <div className="  max-md:ml-8 text-[#303A2B]   ">
            <div className="flex dlex-row items-center space-x-3">
              <p className="pb-0 text-xl font-bold md:text-2xl  ">
                Kelola <span className="text-[#0092A4]">Kelas</span>
              </p>
              <SiGoogleclassroom className="text-3xl text-lime-700" />
            </div>
            <div className="flex flex-row space-x-3 justify-end ">
              <AddCourseButton />
              <TableFilter
                setDefaultValue={settingDefaultValue}
                defaultValue={defaultValue}
                filter={["Premium", "Free"]}
              />
              <SearchInput
                defaultValue={defaultValue}
                setDefaultValue={settingDefaultValue}
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
              records={records}
            />
            <Pagination
              prefPage={prefPage}
              numbers={numbers}
              changeCpage={changeCpage}
              curentPage={curentPage}
              nextPage={nextPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseManagement;

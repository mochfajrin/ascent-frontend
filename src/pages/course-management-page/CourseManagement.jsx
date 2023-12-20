import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { SiGoogleclassroom } from "react-icons/si";

import ValidationDeleteModal from "../../components/ValidationDeleteModal";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import TableCourse from "./components/TableCourse";
import {
  getCourseData,
  getFilterCourseData,
  deleteCourseData,
} from "../../redux/actions/courseAction";

import SearchInput from "../../components/SearchInput";
import TableFilter from "../../components/TableFilter";

const CourseManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [refresh, toggleRefresh] = useState(false);

  const { courseData } = useSelector((state) => state.course);

  const deletingCourse = () => {
    dispatch(
      deleteCourseData(id, () => {
        toggleRefresh((prev) => !prev);
        setOpenModal(false);
        navigate("/dashboard/course-management");
      })
    );
  };

  useEffect(() => {
    dispatch(getCourseData(setLoading));
  }, [dispatch, refresh]);

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
            setCloseModal={() => setOpenModal(false)}
            toggleDeleting={deletingCourse}
          />
          <div className="  max-md:ml-8 ">
            <div className="flex dlex-row items-center space-x-3">
              <p className="pb-0 text-xl font-bold md:text-2xl  ">
                Kelola Kelas
              </p>
              <SiGoogleclassroom className="text-3xl text-lime-700" />
            </div>
            <div className="flex flex-row space-x-3 justify-end ">
              <TableFilter
                filter={["Premium", "Free"]}
                setFilter={(e) =>
                  dispatch(getFilterCourseData(e.target.value, setLoadingTable))
                }
              />
              <SearchInput />
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

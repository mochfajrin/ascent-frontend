import { useEffect, useState } from "react";

import CardStatistic from "../../components/CardStatistic";
import Table from "../../components/Table";
import ValidationDeleteModal from "../../components/ValidationDeleteModal";
import { getCourseData } from "../../api/fetching";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const CourseManagement = () => {
  const [courseData, setCourseData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourseData();
        setCourseData(res);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tableColumns = [
    { key: "courseCode", label: "KODE KELAS" },
    { key: "category", label: "KATEGORI" },
    { key: "courseName", label: "NAMA KELAS" },
    { key: "courseType", label: "TIPE KELAS" },
    { key: "courseLevel", label: "LEVEL" },
    { key: "coursePrice", label: "HARGA KELAS" },
    { key: "aksi", label: "Aksi" },
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
          />
          <CardStatistic />
          <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8 ">
            <p className="pb-0 text-xl font-bold md:text-2xl ">Kelola Kelas</p>
            <Table
              colom={tableColumns}
              dataTable={courseData}
              button={true}
              setOpenModal={() => setOpenModal(true)}
              filter={["Premium", "Free"]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseManagement;

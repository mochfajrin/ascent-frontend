import { useEffect, useState } from "react";

import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";
import ValidationDeleteModal from "../../../components/dashboard-components/ValidationDeleteModal";
import { getCourseData } from "../../../api/fetching";

const CourseManagement = () => {
  const [courseData, setCourseData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourseData();
        setCourseData(res);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchData();
  }, []);

  if (courseData.length == 0) {
    return;
  }

  const tableColumns = [
    { col: "KODE KELAS" },
    { col: "KATEGORI" },
    { col: "NAMA KELAS" },
    { col: "TIPE KELAS" },
    { col: "LEVEL" },
    { col: "HARGA KELAS" },
    { col: "AKSI" },
  ];
  return (
    <>
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
          filter={["premium", "free"]}
        />
      </div>
    </>
  );
};

export default CourseManagement;

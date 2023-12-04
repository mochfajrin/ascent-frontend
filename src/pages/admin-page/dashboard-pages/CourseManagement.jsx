import { useEffect, useState } from "react";

import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";
import { getCourseData } from "../../../api/fetching";

const CourseManagement = () => {
  const [courseData, setCourseData] = useState([]);

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
  // console.log(courseData);

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
      <CardStatistic />
      <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8 ">
        <p className="font-bold md:text-2xl text-xl pb-0 ">Kelola Kelas</p>
        <Table colom={tableColumns} dataTable={courseData} />
      </div>
    </>
  );
};

export default CourseManagement;

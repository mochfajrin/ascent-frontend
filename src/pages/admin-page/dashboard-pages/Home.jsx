import { useEffect, useState } from "react";

import { BiMoneyWithdraw } from "react-icons/bi";

import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";
import { getCourseData } from "../../../api/fetching";

const Home = () => {
  const [courseData, setCourseData] = useState([]);
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
    { col: "ID" },
    { col: "KATEGORI" },
    { col: "KELAS PREMIUM" },
    { col: "STATUS" },
    { col: "METODE PEMBAYARAN" },
    { col: "TANGGAL BAYAR" },
  ];

  return (
    <>
      {loading ? (
        <div className="mt-16">Loading.......</div>
      ) : (
        <div>
          <CardStatistic />
          <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8">
            <div className="flex flex-row space-x-2 items-centers">
              <p className="text-xl font-bold md:text-2xl ">
                Status pembayaran
              </p>
              <BiMoneyWithdraw className="text-4xl text-green-500" />
            </div>
            <Table colom={tableColumns} dataTable={courseData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
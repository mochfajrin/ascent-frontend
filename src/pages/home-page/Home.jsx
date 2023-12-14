import { useEffect, useState } from "react";

import { BiMoneyWithdraw } from "react-icons/bi";

import CardStatistic from "../../components/CardStatistic";
import Table from "../../components/Table";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import { getCourseData } from "../../api/fetching";

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
    { col: "Nama Pelanggan" },
    { col: "KATEGORI" },
    { col: "KELAS PREMIUM" },
    { col: "STATUS" },
    { col: "METODE PEMBAYARAN" },
    { col: "TANGGAL BAYAR" },
  ];

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
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
            <Table
              colom={tableColumns}
              dataTable={courseData}
              button={false}
              filter={["sudah bayar", "belum bayar"]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

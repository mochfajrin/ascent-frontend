import { useEffect, useState } from "react";

import { BiMoneyWithdraw } from "react-icons/bi";

import CardStatistic from "../../components/CardStatistic";
import Table from "../../components/Table";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import { getTrasactionData } from "../../api/fetching";

const Home = () => {
  const [transaction, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getToken = localStorage.getItem("...");
        const res = await getTrasactionData(getToken);
        setTransactionData(res);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tableColumns = [
    { key: "userId", label: "Id Pelanggan" },
    { key: "User.name", label: "Nama PELANGGAN" },
    { key: "courseName", label: "NAMA KELAS" },
    { key: "paymentStatus", label: "STATUS" },
    { key: "paymentMethod", label: "METODE PEMBAYARAN" },
    { key: "totalPrice", label: "Total BAYAR" },
  ];

  console.log(transaction);

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
              dataTable={transaction}
              button={false}
              filter={["paid", "unpaid"]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

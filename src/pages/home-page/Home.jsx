import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";

import CardStatistic from "../../components/CardStatistic";
import {
  getFilterTransactionData,
  getTransactionData,
} from "../../redux/actions/transactionAction";
import TableTransaction from "./components/TableTransaction";
import TableFilter from "../../components/TableFilter";
import SearchInput from "../../components/SearchInput";
import ResetButton from "../course-management-page/components/ResetButton";
import PieChart from "./components/PieChart";
import Pagination from "../../components/Pagination";
import LoadingSkeletonHome from "./components/LoadingSkeletonHome";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const queryStatus = searchParams.get("paymentStatus");
  const querySearch = searchParams.get("search");

  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [defaultValue, setDefaultValue] = useState(false);
  const [curentPage, setCurrentPage] = useState(1);

  const { transactionData } = useSelector((state) => state.transaction);

  const recordsPerPage = 5;
  const lastIndex = curentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = transactionData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(transactionData.length / recordsPerPage);
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

  useEffect(() => {
    AOS.init({
      duration: 300,
    });

    if (queryStatus && querySearch) {
      setLoading(false);
      dispatch(
        getFilterTransactionData({
          filterData: queryStatus,
          queryData: querySearch,
          setLoadingTable: setLoadingTable,
        })
      );
    } else if (queryStatus) {
      setLoading(false);
      dispatch(
        getFilterTransactionData({
          filterData: queryStatus,
          setLoadingTable: setLoadingTable,
        })
      );
    } else if (querySearch) {
      setLoading(false);
      dispatch(
        getFilterTransactionData({
          queryData: querySearch,
          setLoadingTable: setLoadingTable,
        })
      );
    } else {
      dispatch(getTransactionData(setLoading));
    }
  }, [dispatch, queryStatus, querySearch]);

  const tableColumns = [
    { label: "Id Pelanggan" },
    { label: "Nama PELANGGAN" },
    { label: "NAMA KELAS" },
    { label: "STATUS" },
    { label: "METODE PEMBAYARAN" },
    { label: "Total BAYAR" },
  ];

  return (
    <>
      {loading ? (
        <LoadingSkeletonHome />
      ) : (
        <div>
          <CardStatistic />
          <div className="flex flex-row  justify-between items-center space-x-3 mt-16 md:mt-12 ">
            <div className=" max-md:ml-8 w-full">
              <div className="flex flex-row space-x-2 items-centers">
                <p className="text-xl font-bold md:text-2xl text-[#303A2B]   ">
                  Status <span className="text-[#0092A4]">pembayaran</span>
                </p>
                <BiMoneyWithdraw className="text-4xl text-green-500" />
              </div>
              <div className="flex flex-row space-x-3 justify-end ">
                <TableFilter
                  setDefaultValue={settingDefaultValue}
                  defaultValue={defaultValue}
                  filter={["Sudah bayar", "Belum bayar"]}
                />
                <SearchInput
                  defaultValue={defaultValue}
                  setDefaultValue={settingDefaultValue}
                  placeholder={"Cari pelanggan..."}
                />
                <ResetButton
                  routePath={"/dashboard"}
                  setDefaultValue={() => setDefaultValue(true)}
                />
              </div>
              <div className="h-96">
                <TableTransaction
                  setCurrentPage={setCurrentPage}
                  curentPage={curentPage}
                  colom={tableColumns}
                  dataTable={transactionData}
                  showButtonAction={false}
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
            <div>
              <PieChart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

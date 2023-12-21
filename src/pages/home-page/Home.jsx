import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";

import CardStatistic from "../../components/CardStatistic";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import {
  getFilterTransactionData,
  getTransactionData,
} from "../../redux/actions/transactionAction";
import TableTransaction from "./components/TableTransaction";
import TableFilter from "../../components/TableFilter";
import SearchInput from "../../components/SearchInput";
import ResetButton from "../course-management-page/components/ResetButton";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const queryStatus = searchParams.get("paymentStatus");
  const querySearch = searchParams.get("search");

  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [defaultValue, setDefaultValue] = useState(false);

  const { transactionData } = useSelector((state) => state.transaction);

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
            <div className="flex flex-row space-x-3 justify-end ">
              <TableFilter
                setDefaultValue={() => setDefaultValue(false)}
                defaultValue={defaultValue}
                filter={["Sudah bayar", "Belum bayar"]}
              />
              <SearchInput
                defaultValue={defaultValue}
                setDefaultValue={() => setDefaultValue(false)}
                placeholder={"Cari pelanggan..."}
              />
              <ResetButton
                routePath={"/dashboard"}
                setDefaultValue={() => setDefaultValue(true)}
              />
            </div>
            <TableTransaction
              colom={tableColumns}
              dataTable={transactionData}
              showButtonAction={false}
              loading={loadingTable}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

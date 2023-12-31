/* eslint-disable react/prop-types */
import "aos/dist/aos.css";
import courseNotFound from "../../../assets/icons/course-not-found.svg";
import LoadingDataTable from "../../../components/LoadingDataTable";

const TableTransaction = ({ colom, loading, records }) => {
  return (
    <div className="relative overflow-x-auto mt-2  ">
      <table className="w-full mt-3 text-sm text-center text-[#303A2B]  rtl:text-right border">
        <thead className="text-xs text-white uppercase bg-[#0093A3]  ">
          <tr>
            {colom.map((data, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {data.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm">
          {records.length === 0 ? (
            <tr>
              <td colSpan={colom.length} className="text-center">
                <div className="py-12">
                  <div data-aos="zoom-in">
                    <img
                      src={courseNotFound}
                      alt="ascent logo"
                      className="mx-auto w-64 pt-10"
                    />
                    <h1 className="mt-8 text-lg font-bold">
                      Data transaksi tidak ditemukan
                    </h1>
                  </div>
                </div>
              </td>
            </tr>
          ) : loading ? (
            <tr>
              <td colSpan={colom.length}>
                <div className="flex flex-row justify-center my-10">
                  <LoadingDataTable />
                </div>
              </td>
            </tr>
          ) : (
            records.map((data, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.userId ?? "-"}
                </th>
                <td className="px-6 py-4 space-x-3">
                  {data.User ? data.User.name : "-"}
                </td>
                <td className="px-6 py-4 space-x-3 text-left">
                  {data.courseName ?? "-"}
                </td>
                <td
                  className={`px-6 py-4 space-x-3 font-extrabold ${
                    data.paymentStatus === "unpaid"
                      ? "text-[#ff4848]"
                      : "text-green-500"
                  }`}
                >
                  {data.paymentStatus === "paid"
                    ? "Sudah bayar"
                    : "Belum bayar" ?? "-"}
                </td>
                <td className="px-6 py-4 space-x-3">
                  {data.paymentMethod
                    ? data.paymentMethod.replace(/_/g, " ")
                    : "-"}
                </td>
                <td className="px-6 py-4 space-x-3  text-green-400">
                  Rp.
                  {data.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? "-"}
                  ,00
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;

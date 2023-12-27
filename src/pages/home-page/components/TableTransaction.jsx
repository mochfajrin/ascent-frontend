/* eslint-disable react/prop-types */
import noResultPng from "../../../assets/icons/no-results.png";
import "aos/dist/aos.css";

const TableTransaction = ({ colom, dataTable, loading }) => {
  return (
    <div className="relative overflow-x-auto mt-2">
      <div className="overflow-y-auto h-[500px]">
        <table className="w-full mt-3 text-sm text-left text-gray-500 rtl:text-right  ">
          <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
            <tr>
              {colom.map((data, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {data.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dataTable.length === 0 ? (
              <tr>
                <td colSpan={colom.length}>
                  <div data-aos="zoom-in">
                    <img
                      src={noResultPng}
                      alt="ascent logo"
                      className="mx-auto w-48 py-28"
                    />
                  </div>
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan={colom.length}>
                  <img
                    src="/Logo_2.png"
                    alt="ascent logo"
                    className="mx-auto w-48 py-28 animate-bounce"
                  />
                </td>
              </tr>
            ) : (
              dataTable.map((data, i) => (
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
                    {data.User.name ?? "-"}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    {data.courseName ?? "-"}
                  </td>
                  <td
                    className={`px-6 py-4 space-x-3 font-bold ${
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
                  <td className="px-6 py-4 space-x-3">
                    Rp.
                    {data.totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTransaction;

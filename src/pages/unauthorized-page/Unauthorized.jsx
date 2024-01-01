import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center ">
        <img className="w-[500px]" src="./401.svg" alt="" />
        <div className="text-3xl font-bold">
          Anda harus login terlebih dahulu!
        </div>

        <Link
          to={"/dashboard/login"}
          type="button"
          className="focus:outline-none mt-6 text-white  focus:ring-4 bg-[#0092A4] hover:bg-[#469eaa] focus:ring-[#0092A4] font-medium rounded-lg text-lg px-5 py-2.5  "
        >
          Ke halaman login
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;

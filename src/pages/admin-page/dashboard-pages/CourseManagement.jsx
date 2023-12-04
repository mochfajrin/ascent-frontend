import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";

const CourseManagement = () => {
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
        <Table colom={tableColumns} />
      </div>
    </>
  );
};

export default CourseManagement;

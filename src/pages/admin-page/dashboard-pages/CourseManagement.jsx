import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";

const CourseManagement = () => {
  return (
    <>
      <CardStatistic />
      <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8 ">
        <p className="font-bold md:text-2xl text-xl pb-0 ">Kelola Kelas</p>
        <Table />
      </div>
    </>
  );
};

export default CourseManagement;

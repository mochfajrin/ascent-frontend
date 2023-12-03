import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";

const Home = () => {
  return (
    <>
      <CardStatistic />
      <div className="mt-16 md:mt-12">
        <Table />
      </div>
    </>
  );
};

export default Home;

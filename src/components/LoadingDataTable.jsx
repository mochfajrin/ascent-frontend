import { HashLoader } from "react-spinners";

const LoadingDataTable = () => {
  return (
    <div>
      <HashLoader
        color="#0092A4"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingDataTable;

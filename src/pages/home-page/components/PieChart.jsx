import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getCategoryData from "../../../redux/actions/categoryAction";

const PieChart = () => {
  const dispatch = useDispatch();

  const { categoryData } = useSelector((state) => state.category);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCategoryData(setLoading));
  }, [dispatch]);

  return (
    <>
      <div className="w-[500px]">
        <PolarArea
          data={{
            labels: categoryData.map((data) => data.categoryName),
            datasets: [
              {
                data: categoryData.map((data) => data.Courses.length),
                backgroundColor: [
                  "#AF5B5B",
                  "#183059",
                  "#95A472",
                  "#FCAB10",
                  "#6B4E71",
                  "rgba(255, 69, 0, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Total jumlah kelas dalam setiap kategori",
                font: {
                  size: 22,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default PieChart;

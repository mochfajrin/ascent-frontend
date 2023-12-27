import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getCategoryData from "../../../redux/actions/categoryAction";

const PieChart = () => {
  const dispatch = useDispatch();

  const { categoryData } = useSelector((state) => state.category);

  const [loading, setLoading] = useState(true);

  console.log(categoryData);

  useEffect(() => {
    dispatch(getCategoryData(setLoading));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="w-[500px]">
          <Doughnut
            data={{
              labels: categoryData.map((data) => data.categoryName),
              datasets: [
                {
                  data: categoryData.map((data) => data.Courses.length),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(34, 193, 195, 0.8)",
                    "rgba(0, 128, 0, 0.8)",
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
      )}
    </>
  );
};

export default PieChart;

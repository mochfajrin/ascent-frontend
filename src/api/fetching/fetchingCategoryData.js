import api from "../api";

const fetchingCategoryData = async () => {
  const res = await api.get("/category");
  return res.data.data;
};

export default fetchingCategoryData;

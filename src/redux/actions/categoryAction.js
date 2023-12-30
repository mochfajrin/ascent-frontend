import fetchingCategoryData from "../../api/fetching/fetchingCategoryData";
import { setCategoryData } from "../reducers/categoryReducer";

const getCategoryData = (setLoading) => async (dispatch) => {
  try {
    const res = await fetchingCategoryData();
    dispatch(setCategoryData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

export default getCategoryData;

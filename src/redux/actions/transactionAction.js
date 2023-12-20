import { fetchingTrasactionData } from "../../api/fetching";
import { setTransactionData } from "../reducers/transactionReducer";

const getTransactionData = (setLoading) => async (dispatch) => {
  try {
    const getToken = localStorage.getItem("...");
    const res = await fetchingTrasactionData(getToken);
    dispatch(setTransactionData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

// const getSearchCourseData = () => async (dispatch) => {
//   try {
//     const res = await fetchingSearchCourseData();
//     dispatch(setCourseData(res));
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

export { getTransactionData };

import axios from "axios";

import {
  fetchingTrasactionData,
  fetchingFilterTransactionData,
} from "../../api/fetching/fetchingTransactionData";
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
const getFilterTransactionData =
  ({ queryData, filterData, setLoadingTable }) =>
  async (dispatch) => {
    console.log(queryData);
    setLoadingTable(true);
    try {
      const getToken = localStorage.getItem("...");

      const res = await fetchingFilterTransactionData({
        filter: filterData,
        query: queryData,
        token: getToken,
      });
      dispatch(setTransactionData(res));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch(setTransactionData([]));
      }
    } finally {
      setLoadingTable(false);
    }
  };

export { getTransactionData, getFilterTransactionData };

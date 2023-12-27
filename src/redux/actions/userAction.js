import { fetchingUserData } from "../../api/fetching";
import { setUserData } from "../reducers/userReducer";

const getUserData = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await fetchingUserData();
    dispatch(setUserData(res));
  } catch (err) {
    throw new Error(err.message);
  } finally {
    setLoading(false);
  }
};

export default getUserData;

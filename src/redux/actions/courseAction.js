import { getCourseData } from "../../api/fetching";
import { setCourseData } from "../reducers/courseReducer";

const getCoursesData = () => async (dispatch) => {
  try {
    const res = await getCourseData();
    dispatch(setCourseData(res));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getCoursesData;

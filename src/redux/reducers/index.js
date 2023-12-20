import { combineReducers } from "redux";

import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  course: courseReducer,
  user: userReducer,
  transaction: transactionReducer,
});

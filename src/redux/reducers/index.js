import { combineReducers } from "redux";

import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";
import chapterReducer from "./chapterReducer";
import categoryReducer from "./categoryReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
  course: courseReducer,
  user: userReducer,
  transaction: transactionReducer,
  chapter: chapterReducer,
  category: categoryReducer,
  content: contentReducer,
});

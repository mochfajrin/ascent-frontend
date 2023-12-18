import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

const store = configureStore({
  reducer: reducer,
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store change : ", store.getState());
});

export default store;

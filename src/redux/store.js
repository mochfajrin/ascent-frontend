import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["course.form.image"],
      },
    }),
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store change : ", store.getState());
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    contentData: [],
    form: { contentTitle: "", contentUrl: "", videoDuration: "" },
  },
  reducers: {
    setContentData: (state, action) => {
      state.contentData = action.payload;
    },
    setFormContent: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setContentData, setFormContent } = contentSlice.actions;
export default contentSlice.reducer;

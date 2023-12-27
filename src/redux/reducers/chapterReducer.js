import { createSlice } from "@reduxjs/toolkit";

const chapterSlice = createSlice({
  name: "chapter",
  initialState: { chapterData: [], form: { chapterTitle: "" } },
  reducers: {
    setChapterData: (state, action) => {
      state.chapterData = action.payload;
    },
    setFormChapter: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setChapterData, setFormChapter } = chapterSlice.actions;
export default chapterSlice.reducer;

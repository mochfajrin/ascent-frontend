import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { courseData: [], search: [] },
  reducers: {
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;

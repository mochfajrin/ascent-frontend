import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseData: [],
    form: {
      categoryId: "",
      courseCode: "",
      courseName: "",
      courseLevel: "",
      aboutCourse: "",
      telegramGroup: "",
      intendedFor: "",
      coursePrice: "",
      courseDiscountInPercent: "",
      rating: "",
    },
    labelNewData: false,
  },
  reducers: {
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },

    setNewLabelData: (state, action) => {
      state.labelNewData = action.payload;
    },
  },
});

export const { setCourseData, setForm, setNewLabelData } = courseSlice.actions;
export default courseSlice.reducer;

// src/features/courses/coursesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CourseResponse } from "../models/CourseResponse";
import { ResponseStatus } from "../models/ResponseStatus";

interface CoursesState {
  courses: CourseResponse[];
  status: ResponseStatus;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  status: ResponseStatus.Idle,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (userId: number) => {
    const response = await axios.get<CourseResponse[]>(
      `/api/courses?userId=${userId}`
    );
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = ResponseStatus.Loading;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = ResponseStatus.Succeeded;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = ResponseStatus.Failed;
        state.error = action.error.message || "Failed to fetch courses";
      });
  },
});

export default coursesSlice.reducer;

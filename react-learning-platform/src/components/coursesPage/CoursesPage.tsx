import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CoursesList from "../coursesList/CoursesList";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../store/coursesSlice";
import { ResponseStatus } from "../../models/ResponseStatus";

const CoursesPage: React.FC<{ userId: number }> = ({ userId }) => {
  const dispatch: AppDispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const status = useSelector((state: RootState) => state.courses.status);
  const error = useSelector((state: RootState) => state.courses.error);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (status === ResponseStatus.Idle) {
        dispatch(fetchCourses(userId));
      }
    }
  }, []);

  if (status === ResponseStatus.Loading) {
    return <Typography>Loading...</Typography>;
  }

  if (status === ResponseStatus.Failed) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Box id="inprogress">
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          Continue learning
        </Typography>
        <CoursesList
          courses={courses.filter(
            (c) => c.userProgress > 0 && c.userProgress < 100
          )}
        />
      </Box>

      <Box id="recommended" sx={{ mt: 2 }}>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          You might also like
        </Typography>
        <CoursesList courses={courses.filter((c) => c.userProgress == 0)} />
      </Box>
    </Container>
  );
};
export default CoursesPage;

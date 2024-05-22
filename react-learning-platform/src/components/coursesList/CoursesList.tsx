import { Grid } from "@mui/material";
import React from "react";
import Course from "../course/Course";
import { CourseResponse } from "../../models/CourseResponse";

interface CoursesListProps {
  courses: CourseResponse[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  return (
    <>
      {courses.length > 0 ? (
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          {courses.map((course) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={course.id}>
                <Course {...course} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
export default CoursesList;

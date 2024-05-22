import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Course from "./components/course/Course";
import NavBar from "./components/navbar/NavBar";
import CoursesPage from "./components/coursesPage/CoursesPage";
import SignIn from "./components/signIn/SignIn";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/courses" element={<CoursesPage userId={1} />}></Route>
        <Route
          path="/courses/:id"
          element={
            <Course
              id={1}
              img="bla.svg"
              author="Marina Ionel"
              duration="3 hours"
              numberOfLessons={4}
              likes={286}
              name="Introduction to investing"
              authorAvatarUrl=""
              userProgress={0}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;

import { db } from "../knex";
import { Course } from "../models/Course";

export const getAllCoursesForUser = async (
  userId: number
): Promise<Course[]> => {
  try {
    return await db("courses")
      .select(
        "courses.id",
        "courses.coverimageurl AS img",
        "courses.name",
        "users.name AS author",
        "courses.duration",
        "courses.numberoflessons as numberOfLessons",
        "users.avatarurl AS authorAvatarUrl",
        db.raw("COALESCE(user_courses.userprogress, 0) AS ??", [
          "userProgress",
        ]),
        db.raw("COUNT(course_likes.id) AS ??", ["likes"])
      )
      .join("users", "courses.authorid", "users.id")
      .leftJoin("user_courses", function () {
        this.on("courses.id", "user_courses.courseid").andOn(
          "user_courses.userid",
          "=",
          userId
        );
      })
      .leftJoin("course_likes", "courses.id", "course_likes.courseid")
      .groupBy(
        "courses.id",
        "courses.coverimageurl",
        "courses.name",
        "users.name",
        "courses.duration",
        "courses.numberoflessons",
        "users.avatarurl",
        "user_courses.userprogress"
      );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCourseById = async (courseId: number): Promise<Course> => {
  try {
    return await db("courses")
      .select(
        "courses.id",
        "courses.coverimageurl AS img",
        "courses.name",
        "users.name AS author",
        "courses.duration",
        "courses.numberoflessons",
        "users.avatarurl AS authorAvatarUrl",
        db.raw("0 AS ??", ["userProgress"]),
        db.raw("COUNT(course_likes.id) AS ??", ["likes"])
      )
      .join("users", "courses.authorid", "users.id")
      .leftJoin("user_courses", "courses.id", "user_courses.courseid")
      .leftJoin("course_likes", "courses.id", "course_likes.courseid")
      .where("courses.id", courseId)
      .groupBy(
        "courses.id",
        "courses.coverimageurl",
        "courses.name",
        "users.name",
        "courses.duration",
        "courses.numberoflessons",
        "users.avatarurl",
        "user_courses.userprogress"
      )
      .first();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

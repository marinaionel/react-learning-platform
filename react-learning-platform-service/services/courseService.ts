import { db } from "../knex";
import { Course as Course } from "../models/Course";

export const getAllCoursesForUser = async (userId: number) => {
  const query = `
    SELECT
        courses.id,
        courses.coverImageUrl AS img,
        courses.name,
        users.name AS author,
        courses.duration,
        courses.numberOfLessons,
        users.avatarUrl AS authorAvatarUrl,
        COALESCE(user_courses.userProgress, 0) AS userProgress,
        COUNT(course_likes.id) AS likes
    FROM
        courses
    JOIN
        users ON courses.authorId = users.id
    LEFT JOIN
        user_courses ON courses.id = user_courses.courseId AND user_courses.userId = ?
    LEFT JOIN
        course_likes ON courses.id = course_likes.courseId
    GROUP BY
        courses.id,
        courses.coverImageUrl,
        courses.name,
        users.name,
        courses.duration,
        courses.numberOfLessons,
        users.avatarUrl,
        user_courses.userProgress;
  `;

  const courses: Course[] = await db.raw(query, [userId]);
  return courses;
};

export const getCourseById = async (courseId: number) => {
  const query = `
          SELECT
              courses.id,
              courses.coverImageUrl AS img,
              courses.name,
              users.name AS author,
              courses.duration,
              courses.numberOfLessons,
              users.avatarUrl AS authorAvatarUrl,
              0 AS userProgress,
              COUNT(course_likes.id) AS likes
          FROM
              courses
          JOIN
              users ON courses.authorId = users.id
          LEFT JOIN
              user_courses ON courses.id = user_courses.courseId
          LEFT JOIN
              course_likes ON courses.id = course_likes.courseId
          WHERE
              courses.id = ?
          GROUP BY
              courses.id,
              courses.coverImageUrl,
              courses.name,
              users.name,
              courses.duration,
              courses.numberOfLessons,
              users.avatarUrl,
              user_courses.userProgress;
        `;

  const course: Course | undefined = await db
    .raw(query, [courseId])
    .then((rows: Course[]) => rows[0]);
  return course;
};

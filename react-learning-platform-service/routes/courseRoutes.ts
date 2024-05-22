import { Request, Response, Router } from "express";
import { getAllCoursesForUser, getCourseById } from "../services/courseService";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.query.userId as string); //TODO should be exatracted from token via middleware
    res.send(await getAllCoursesForUser(userId));
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// TODO if user is logged in return user progress else 0
router.get("/:id", async (req, res) => {
  try {
    const courseId: number = parseInt(req.params?.id ?? "-1");
    res.send(await getCourseById(courseId));
  } catch (error) {
    console.error(`Error fetching course with ID ${req.params?.id}`, error);
    res
      .status(500)
      .json({ error: `Failed to fetch course with ID ${req.params?.id}` });
  }
});

export default router;

import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";

interface CourseProps {
  id: number;
  img: string;
  name: string;
  author: string;
  duration: string;
  likes: number;
  numberOfLessons: number;
  authorAvatarUrl: string;
  userProgress: number;
}

export const Course: React.FC<CourseProps> = ({
  id,
  img,
  name,
  author,
  duration,
  likes,
  numberOfLessons,
  authorAvatarUrl,
  userProgress,
}: CourseProps) => {
  return (
    <Card sx={{ position: "relative" }}>
      {userProgress > 0 && userProgress < 100 && (
        <Chip
          sx={{
            zIndex: 99,
            position: "absolute",
            top: "1em",
            right: "1em",
          }}
          label={userProgress + "% completed"}
          color="primary"
        />
      )}
      <CardActionArea>
        <CardMedia component="img" image={img} title={name} />
        <CardContent>
          <Link to={`/courses/${id}`} key={id}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Link>
          <Box display="flex" alignItems="center" marginY="4px">
            <Typography variant="body2" color="textSecondary" component="p">
              by {author}{" "}
            </Typography>{" "}
            <Avatar
              alt={name}
              src={authorAvatarUrl}
              sx={{ width: 20, height: 20, marginLeft: "4px" }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              marginRight="8px"
            >
              {numberOfLessons} lessons
            </Typography>

            <Box display="flex" alignItems="center" marginX="8px">
              <AccessTimeIcon
                sx={{ width: 20, height: 20, marginRight: "4px" }}
              />{" "}
              {duration}
            </Box>

            <Box display="flex" alignItems="center" marginLeft="8px">
              {likes}
              <ThumbUpIcon
                sx={{
                  width: 20,
                  height: 20,
                  marginLeft: "4px",
                  color: "#FF9100",
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Course;

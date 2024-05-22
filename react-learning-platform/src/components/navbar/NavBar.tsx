import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Courses
        </Typography>
        <Button
          variant="text"
          color="inherit"
          onClick={() => navigate("/courses")}
        >
          Courses
        </Button>
        <Button variant="text" color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

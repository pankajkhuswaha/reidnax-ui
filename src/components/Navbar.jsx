/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ toggle }) => {
  const atadmin = useLocation().pathname.includes("admin");
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  if (atadmin) {
    return (
      <AppBar
        position="sticky"
        sx={{
          background: "#fff",
          color: "black",
          marginBottom: "10px",
          height: "60px",
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={2}
        >
          <Toolbar>
            <IconButton
              onClick={toggle}
              color="inherit"
              aria-label="open drawer"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Reidlex Challenge
            </Typography>
          </Toolbar>
          <Button color="inherit" onClick={handlelogout}>
            LogOut
          </Button>
        </Stack>
      </AppBar>
    );
  }
};

export default Navbar;

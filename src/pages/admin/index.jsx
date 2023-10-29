import { useState } from "react";
import { Drawer, Typography, Stack } from "@mui/material";
import Navbar from "./../../components/Navbar";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const AdminLayout = () => {
  const [open, setOpen] = useState(true);
  const [drawerWidth, setdrawerWidth] = useState(240);

  const toggleDrawer = () => {
    setOpen(!open);
    if (drawerWidth == 240) setdrawerWidth(0);
    if (drawerWidth == 0) setdrawerWidth(240);
  };
  const { user, isLoading } = useSelector((st) => st.auth);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && user.name && (
        <div style={{ display: "flex" }}>
          <Stack
            sx={{
              width: "100%",
              transition: "width s ease-in",
            }}
          >
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
                transition: "all 0.4 ease",
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <div>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Dashboard
                </Typography>
              </div>
              {adminRoutes.map((route, i) => (
                <NavLink
                  key={i}
                  to={`/admin/${route.path}`}
                  className="bg-[#FCF5ED] flex gap-4 items-center pl-4 py-2"
                >
                  {route.icon}
                  <p className=" capitalize">{route.path}</p>
                </NavLink>
              ))}
            </Drawer>
            <Stack ml={`${drawerWidth}px`} sx={{ transition: "all 0.4 ease" }}>
              <Navbar toggle={toggleDrawer} />
              <div className="ml-3">
                <Routes>
                  {adminRoutes.map((route, i) => (
                    <Route key={i} path={route.path} element={route.element} />
                  ))}
                </Routes>
              </div>
            </Stack>
          </Stack>
        </div>
      )}
      {!isLoading && user.name==undefined && (
        <>
          <p className="h3 text-center my-10">Please Login to Continue</p>
          <div className="flex items-center justify-center">
            <Link to={"/"} className="btn btn-danger">
              Login
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default AdminLayout;

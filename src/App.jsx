import { Route, Routes } from "react-router-dom";
import AdminLayout from "./pages/admin";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyUser } from "./features/authSlice";
const theme = createTheme();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyUser());
  }, []);
  return (
    <>
      <ToastContainer />
      {
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/admin/*"} element={<AdminLayout />} />
          </Routes>
        </ThemeProvider>
      }
    </>
  );
};

export default App;

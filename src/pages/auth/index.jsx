import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path={"login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default Auth
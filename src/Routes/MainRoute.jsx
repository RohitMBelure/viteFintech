import { Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Register } from "./Register";
import { Signup } from "./Signup";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/register"
        element={
          // <PrivateRoute>

          <Register />
          // </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <Heading
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            margin="10rem 0rem"
            color={"red"}
          >
            PAGE NOT FOUND
          </Heading>
        }
      />
    </Routes>
  );
};

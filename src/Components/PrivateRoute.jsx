import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isActive, isAdmin } = useSelector((state) => state);
  console.log(isActive);
  if (!isActive || !isAdmin) {
    return <Navigate to="/" />;
  }
  return <Box>{children}</Box>;
};

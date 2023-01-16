import { Button, HStack, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isActive, isAdmin } = useSelector((state) => state);

  return (
    <Box>
      <HStack
        bg="tomato"
        display={"flex"}
        justifyContent="space-between"
        p="20px"
        alignItems="center"
      >
        <Box
          display={"flex"}
          justifyContent="flex-start"
          gap={"10rem"}
          alignItems={"center"}
          width="70%"
        >
          {isAdmin ? (
            <Link to="/">
              <Button>Hello, admin !</Button>
            </Link>
          ) : (
            ""
          )}
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <Link to="/register">
            <Button>Registration</Button>
          </Link>
        </Box>
        <Link to="/login">
          <Button>{isActive ? "LOGOUT" : "LOGIN"}</Button>
        </Link>
      </HStack>
    </Box>
  );
};

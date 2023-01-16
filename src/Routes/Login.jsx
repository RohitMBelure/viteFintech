import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { admin, getUsers, login } from "../Redux/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { users, isActive } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleLogin = async () => {
    if (email && password) {
      if (email === "admin@gmail.com" && password === "admin@123") {
        const payload = {
          email: "admin@gmail.com",
          password: "admin@123",
        };
        dispatch(admin(payload));
      } else {
        try {
          let currentUser = users.filter((ele) => {
            if (ele.email === email && ele.password === password) return ele;
          });
          console.log(currentUser);
          sessionStorage.setItem("currentUser", JSON.stringify(currentUser[0]));
          if (currentUser.length !== 0) {
            setEmail("");
            setPassword("");
            dispatch(login(true));
            alert("Login Successful");
            navigate("/register");
          } else {
            alert("Doesn't match Email/Password. Please Login/Signup");
          }
        } catch (err) {
          alert("Login Failed");
        }
      }
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <Box
      width="40%"
      m="auto"
      marginTop={"2rem"}
      padding="2rem"
      borderRadius="7px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      rounded="md"
      bg="white"
    >
      <FormControl isRequired>
        <FormLabel>{"Email"}</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>{"Password"}</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button mt={6} colorScheme="teal" onClick={handleLogin}>
          LOGIN
        </Button>
        <br />
        <br />

        <Text>
          Don't have account {"   "}
          <Link to="/">
            <Text as={"b"} color="green">
              SIGNUP
            </Text>
          </Link>
        </Text>
      </FormControl>
    </Box>
  );
};

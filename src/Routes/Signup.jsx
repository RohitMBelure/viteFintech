import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, getUsers } from "../Redux/action";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleSignup = () => {
    if (name && email && password) {
      let status = false;
      users.forEach((ele) => {
        if (ele.email === email) status = true;
      });
      if (status) {
        alert("Email already exist Please Login or try using another email");
      } else {
        const payload = {
          name,
          email,
          password,
        };
        dispatch(addUser(payload)).then((res) => {
          setEmail("");
          setName("");
          setPassword("");
          alert("Signup Successful");
          navigate("/login");
        });
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
      borderRadius="5px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      rounded="md"
      bg="white"
    >
      <FormControl isRequired>
        <FormLabel>{"Name"}</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button mt={6} colorScheme="teal" width={"7rem"} onClick={handleSignup}>
          SIGNUP
        </Button>
        <br />
        <br />

        <Text>
          Already have an account {"   "}
          <Link to="/login">
            <Text as={"b"} color="green">
              LOGIN
            </Text>
          </Link>
        </Text>
      </FormControl>
    </Box>
  );
};

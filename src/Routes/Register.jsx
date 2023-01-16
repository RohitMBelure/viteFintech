import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/action";

export const Register = () => {
  const { isActive } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [userPhoto, setUserPhoto] = useState({ photo: "" });
  const [userAadharCard, setUserAadharCard] = useState({ aadharCard: "" });

  const handleSubmit = () => {
    if (
      name &&
      email &&
      religion &&
      gender &&
      age &&
      profession &&
      userPhoto &&
      userAadharCard &&
      phone
    ) {
      const payload = {
        name,
        email,
        phone,
        religion,
        gender,
        age,
        profession,
        userPhoto,
        userAadharCard,
        status: "pending",
      };
      console.log(payload);
      dispatch(register(payload)).then((res) => {
        alert("Registration successful");
        setAge("");
        setEmail("");
        setPhone("");
        setGender("");
        setName("");
        setProfession("");
        setReligion("");
        setUserAadharCard("");
        setUserPhoto("");
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const handlePhoto = (e) => {
    let { name } = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (name === "photo") {
          setUserPhoto({ photo: reader.result });
        } else {
          setUserAadharCard({ aadharCard: reader.result });
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Box
      width={"50%"}
      margin="auto"
      padding="1rem 3rem"
      borderRadius="5px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      rounded="md"
      bg="white"
    >
      <Heading margin={"1rem 0rem 2rem"} color="teal">
        {"REGISTRATION FORM"}
      </Heading>
      <FormControl isRequired>
        <FormLabel>{"Name"}</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          margin="0rem 0rem 1rem"
        />
        <FormLabel>{"Email"}</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Id"
          margin="0rem 0rem 1rem"
        />
        <FormLabel>{"Phone"}</FormLabel>
        <Input
          type="number"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          margin="0rem 0rem 1rem"
        />
        <FormLabel>{"Gender"}</FormLabel>
        <Select
          name="gender"
          onChange={(e) => setGender(e.target.value)}
          margin="0rem 0rem 1rem"
        >
          <option>--{"Select"}--</option>
          <option value="Male">{"Male"}</option>
          <option value="Female">{"Female"}</option>
        </Select>
        <FormLabel>{"Age"}</FormLabel>
        <Input
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          margin="0rem 0rem 1rem"
        />

        <FormLabel>{"Profession"}</FormLabel>
        <Select
          name="profession"
          onChange={(e) => setProfession(e.target.value)}
          margin="0rem 0rem 1rem"
        >
          <option>--{"Select"}--</option>
          <option value="Service">{"Service"}</option>
          <option value="Business">{"Business"}</option>
          <option value="Self Employed">{"Self Employed"}</option>
          <option value="Other">{"Others"}</option>
        </Select>
        <FormLabel>{"Religion"}</FormLabel>
        <Select
          name="religion"
          onChange={(e) => setReligion(e.target.value)}
          margin="0rem 0rem 1rem"
        >
          <option>--{"Select"}--</option>
          <option value="Hindu">{"Hindu"}</option>
          <option value="Islam">{"Islam"}</option>
          <option value="Sikhism">{"Sikhism"}</option>
          <option value="Christianity">{"Christianity"}</option>
        </Select>

        <FormLabel>{"Photo"}</FormLabel>
        <Input
          style={{ border: "none" }}
          type="file"
          name="photo"
          onChange={handlePhoto}
          margin="0rem 0rem 1rem"
        />
        <FormLabel>{"Aadhar Card"}</FormLabel>
        <Input
          type="file"
          style={{ border: "none" }}
          name="aadharCard"
          onChange={handlePhoto}
          margin="0rem 0rem 1rem"
        />
        <Button mt={6} colorScheme="teal" type="Signup" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  );
};

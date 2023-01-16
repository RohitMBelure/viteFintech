import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getregistrations, updateregistrations } from "../Redux/action";

export const RegistrationCard = ({
  userPhoto,
  name,
  gender,
  email,
  religion,
  age,
  profession,
  status,
  phone,
  id,
}) => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state);

  const handleAccept = () => {
    const payload = {
      status: "Approved",
    };
    dispatch(updateregistrations(id, payload)).then((res) => {
      dispatch(getregistrations());
      alert("Application Accepted");
    });
  };

  const handleReject = () => {
    const payload = {
      status: "Rejected",
    };
    dispatch(updateregistrations(id, payload)).then((res) => {
      dispatch(getregistrations());
      alert("Application Rejected");
    });
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width={"70%"}
      margin="auto"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={userPhoto.photo}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Heading size="md" textAlign={"left"}>
            {name}
          </Heading>
          <Box
            display={"flex"}
            justifyContent="flex-start"
            alignItems={"center"}
            gap="20px"
          >
            <Text py="2">
              <b>GENDER : </b>
              {gender}
            </Text>
            <Text py="2">
              {" "}
              <b> AGE : </b>
              {age}
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent="flex-start"
            alignItems={"center"}
            gap="20px"
          >
            <Text py="2">
              <b>RELIGION : </b>
              {religion}
            </Text>
            <Text py="2">
              {" "}
              <b> PROFESSION : </b>
              {profession}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="flex-start"
            alignItems={"center"}
            gap="20px"
          >
            <Text py="2">
              <b>EMAIL : </b>
              {email}
            </Text>
            <Text py="2">
              {" "}
              <b> PHONE : </b>
              {phone}
            </Text>
          </Box>
          <Text py="2" textAlign={"left"}>
            <b>STATUS : </b>
            <i>{status}</i>
          </Text>
          {isAdmin ? (
            <Box display={"flex"} justifyContent="flex-start" gap={"2rem"}>
              <Button
                variant="solid"
                colorScheme="green"
                onClick={handleAccept}
              >
                ACCEPT
              </Button>
              <Button variant="solid" colorScheme="red" onClick={handleReject}>
                REJECT
              </Button>
            </Box>
          ) : (
            ""
          )}
        </CardBody>
      </Stack>
    </Card>
  );
};

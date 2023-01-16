import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationCard } from "../Components/Card";
import { getregistrations } from "../Redux/action";

export const Dashboard = () => {
  const { registrations } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getregistrations());
  }, []);

  return (
    <Box margin={"1rem 0rem"}>
      {registrations?.map((ele) => (
        <RegistrationCard key={ele.id} {...ele} />
      ))}
    </Box>
  );
};

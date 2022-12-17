import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { loginData } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Particle } from "../components/particle";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, isLoading } = useSelector((state) => state.authreducer);
  const handleClick = () => setShow(!show);
  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    dispatch(loginData(payload));
    setEmail("");
    setPassword("");
  };
  if (isAuth) {
    navigate("/landing");
  }
  return (
    <div>
      <Particle />
      <Container
        zIndex={10}
        pos={"fixed"}
        top="0px"
        paddingBottom={"20px"}
        paddingTop={"20px"}
        height={"auto"}
        bg="#2c8afb"
        maxW={"100%"}
        justifyContent="center"
        display={"flex"}
        alignItems="center"
      >
        <img src="/gadgetstop.jpeg" alt="" />
      </Container>
      <Container
        bg={"white"}
        maxW={{ lg: "30%", md: "50%", sm: "70%", base: "90%" }}
        marginTop={"200px"}
        padding="40px"
        borderRadius={"10px"}
      >
        <Heading fontWeight={""}>Sign In</Heading>
        <br />
        <FormControl
          isRequired
          display="grid"
          gridTemplateColumns={"repeat(1,1fr)"}
        >
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                color={"white"}
                _hover={{ color: "white" }}
                bg={"#0066ff"}
                h="1.75rem"
                size="sm"
                onClick={handleClick}
              >
                {show ? (
                  <Icon as={AiOutlineEyeInvisible} />
                ) : (
                  <Icon as={AiOutlineEye} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <br />
          <Button
            color={"white"}
            bg={"#0066ff"}
            disabled={email === "" || password === ""}
            _hover={{ color: "white" }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </FormControl>
        <br />
        <HStack>
          <Text>don't have an account?</Text>
          <Link to="/signup">
            <Text color={"blue"} textDecoration="underline">
              Sign Up
            </Text>
          </Link>
        </HStack>
      </Container>
    </div>
  );
};

export default Login;

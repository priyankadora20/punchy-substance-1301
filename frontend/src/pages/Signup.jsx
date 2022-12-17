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
  useDisclosure,
  HStack,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Particle } from "../components/particle";
import { Link, useNavigate } from "react-router-dom";
import { signupData } from "../redux/authReducer/action";
import { useEffect } from "react";
const Signup = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [admin, setAdmin] = React.useState("");
  const [userType, setUserType] = React.useState("user");
  const { isSign } = useSelector((state) => state.authreducer);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUser = () => {
    if (admin === "1234") {
      setUserType("admin");
    } else {
      setUserType("user");
    }
    onClose();
  };
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      userType,
    };
    dispatch(signupData(payload));
    setName("");
    setEmail("");
    setPassword("");
    setUserType("");
  };
  if (isSign) {
    navigate("/login");
  }
  return (
    <div>
      <Particle />
      <Container
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
        zIndex={10}
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
        <Heading fontWeight={""}>Create Account</Heading>
        <br />
        <FormControl
          isRequired
          display="grid"
          gridTemplateColumns={"repeat(1,1fr)"}
        >
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Full Name"
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
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
            disabled={email === "" || password === "" || name === ""}
            _hover={{ color: "white" }}
            onClick={handleSubmit}
          >
            Create account
          </Button>
        </FormControl>
        <br />
        <HStack>
          <Text>already have an account?</Text>
          <Link to="/login">
            <Text color={"blue"} textDecoration="underline">
              Sign In
            </Text>
          </Link>
        </HStack>
        <br />
        <>
          <Button onClick={onOpen}>Admin</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Please Enter Pin</ModalHeader>
              <ModalCloseButton />
              <ModalBody justifyContent="center" display={"flex"}>
                <HStack>
                  <PinInput mask onChange={(e) => setAdmin(e)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={handleUser} variant="ghost">
                  Admin
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Container>
    </div>
  );
};

export default Signup;

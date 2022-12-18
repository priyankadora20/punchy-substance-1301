import {
  Container,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Particle } from "../components/particle";
import { addData } from "../redux/adminReducer/action";
const AddProduct = () => {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [price, setPrice] = React.useState(0);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    const payload = {
      title,
      image: url,
      about,
      price,
      category: "new",
    };
    dispatch(addData(payload));
    setTitle("");
    setAbout("");
    setPrice(0);
    setUrl("");
  };
  return (
    <div>
      <Particle />
      <Container
        bg={"white"}
        maxW={{ lg: "30%", md: "50%", sm: "70%", base: "90%" }}
        marginTop={"200px"}
        padding="40px"
        borderRadius={"10px"}
      >
        <Heading fontWeight={""}>Add a New Product</Heading>
        <br />
        <FormControl
          isRequired
          display="grid"
          gridTemplateColumns={"repeat(1,1fr)"}
        >
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Enter Title"
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <FormLabel>Image URL</FormLabel>
          <Input
            pr="4.5rem"
            value={url}
            placeholder="Enter URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <br />
          <FormLabel>Price</FormLabel>
          <Input
            pr="4.5rem"
            placeholder="Enter Product Price"
            type={"number"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <FormLabel>Description</FormLabel>
          <Input
            pr="4.5rem"
            placeholder="Enter Product Description"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <br />
          <Button
            color={"white"}
            bg={"#0066ff"}
            disabled={title === "" || about === "" || price === 0 || url === ""}
            _hover={{ color: "white" }}
            onClick={handleSubmit}
          >
            ADD
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddProduct;

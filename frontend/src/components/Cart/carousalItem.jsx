import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/Cart.css";

const CarouselItem = (props) => {
  const { name, price, image } = props;

  return (
    <div>
      <Box id="caro-div">
        <Box id="caro-prod-img">
          <img src={image} alt="" />
        </Box>
        <Box id="caro-prod-title">
          <Text >{name}</Text>
        </Box>
        <Text id="caro-prod-price">{price}</Text>
      </Box>
    </div>
  );
};

export default CarouselItem;
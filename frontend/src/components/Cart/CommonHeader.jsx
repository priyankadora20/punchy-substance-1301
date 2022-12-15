import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Cart.css"
import logo from "../Image/logo.jpeg"

 const CommonHeader = () => {
  return (
    <div>
        <Box id="blue-banner">
        <Box id="logosecure">
          <Link to="/">
            <Img
              id="logo"
              src={logo}
              alt=""
            />
          </Link>
          <Heading color={"white"} fontWeight={"hairline"}>
            |
          </Heading>
          <Box display={"flex"} justifyContent="space-evenly" width={"50%"}>
            <img
              id="secure"
              src="https://content1.geekbuying.com/V1.4/en/images/secure_checkout.png"
              alt=""
            />

            <p style={{ width:"100%",paddingLeft:"20px",color:"white"}}>
              Secure Checkout
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default CommonHeader
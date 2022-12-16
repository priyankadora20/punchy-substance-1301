import { Box, Heading, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CommonHeader from "../Cart/CommonHeader.jsx";
import "../styles/Payment.css";
import { Link } from "react-router-dom";

const PaymentPage = () => {

  const [yes,setYes]= useState(false)


  return (
    <div>
      <CommonHeader />
      <br />
      <Box id="payment_method">
        <Heading as={"h4"}>Payment Method</Heading>
        <br />
        <Box className="pay_opt">
          <Box>
            <form className="">
              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/paypal.jpg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>

              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/Adyen_Klarna.svg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>
              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} checked={yes} onChange={()=>setYes(true)} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/useepaylog.jpg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>
            </form>
          </Box>
          {/* Pay Box */}
          {yes && <Box className="pay_box">
           
            <Button marginBottom={"10px"} width={"100%"} bgColor={"yellow.400"}>
              <img
                id="paypal"
                src="https://www.blumenthalarts.org/assets/img/paypal-logo-26b71255bc.png"
                alt=""
              />
            </Button>
            <Link to="/bank">
              <Button id="deb-card" width={"100%"} bgColor={"black"} color={"white"}>
                <Box display={"flex"} alignItems={"center"}>
                  
                  <Text marginLeft={"10px"}> 💳 Debit or Credit Card</Text>
                </Box>
              </Button>
            </Link>
            <img
              id="pow_pay"
              src="https://techtolia.com/PayPal/assets/images/powered_by_paypal.png"
              alt=""
            />
          </Box>}
        </Box>
      </Box>
    </div>
  );
};

export default PaymentPage;

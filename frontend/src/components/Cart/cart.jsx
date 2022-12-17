import { Box, Text, Button, color } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
// import Carousel from "react-elastic-carousel";
// import CarouselItem from "./CarouselItem";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import CommonHeader from "../Cart/CommonHeader";



const CartPage = () => {

  
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0)
  let grandTotal= 0;
  let count=0;
  


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 6, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 4 },
  ];

  // useEFFECT

  useEffect(() => {
   
    fetch("https://fakestoreapi.com/products/1",{
    
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      setCartItems(res)
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

   
  
  },[]);

// callback func

const getmrp= (data)=>{
  grandTotal += data
  console.log(data,"data");
 setSum(grandTotal)

}



  return (
    <div>
      {/* Blue banner top */}
      <CommonHeader />
      {/* Product Name & Detail */}

      <Box id="product-display">
        <Text fontWeight={"bold"} textAlign={"left"}>Product Name & Detail</Text>
        <br />
        <Box id="product-tab">
          <Box>Product Name & Detail</Box>
          <Box>Unit Price</Box>
          <Box>Quantity</Box>
          <Box>Total</Box>
          <Box>Operation</Box>
        </Box>
        <Box className="cart_summary">
         
         {cartItems.length > 0 && cartItems.map((item)=>{
          
           return(
              <Box key={item._id}>
                  <CartItem getmrp= {getmrp} sum= {sum} setSum={setSum} name= {item.items_p} image={item.lazy_img_src} price= {item.items_price}/>
              </Box>
           )
         })}        
        </Box>
        <Box
          paddingLeft={"1%"}
          marginBottom={"5px"}
          marginTop={"5px"}
          paddingRight={"5%"}
          height={"50px"}
          width="100%"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box
            width={"12%"}
            alignItems="center"
            justifyContent={"space-around"}
            display={"flex"}
          >
            <input type="checkbox" />
            <Text fontWeight={"bold"}>Select All</Text>
          </Box>
          <Box
            width={"20%"}
            alignItems="center"
            justifyContent={"space-around"}
            display={"flex"}
          >
            <Text fontWeight={"bold"}>Your SubTotal: </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"orangeRed"}>
            {(sum).toFixed(2)}
            </Text>
          </Box>
        </Box>
        {/*  */}
        <Box id="cont-shop">
          <Link to={"/"} id="/"  style={{textDecoration: "none",width:"100%" }}>
            <p style={{color:"black"}}>
              {"Continue Shopping  >"}
            </p>
          </Link>
          <Box>
            <Text
              color={"gray"}
              fontSize={"md"}
              textAlign={"center"}
            >{`You choosed ${count} item(s)`}</Text>
          </Box>
          <Box>
            <Text  fontSize={"20px"}
              paddingBottom="10px"
              paddingRight={"10px"}
              textAlign={"center"}
              color={"orangeRed"}
              fontWeight={"bold"}>
            Total : ₹
            </Text>
            <Text
              fontSize={"32px"}
              paddingBottom="10px"
              paddingRight={"10px"}
              textAlign={"center"}
              color={"orangeRed"}
              fontWeight={"bold"}
            >
              {(sum).toFixed(2)}
            </Text>
          </Box>
          <Box>
            <Box id="button-div">
              <Button id="payment-buttons">
                <img
                  id="paypal"
                  src="https://www.blumenthalarts.org/assets/img/paypal-logo-26b71255bc.png"
                  alt=""
                />
              </Button>
              {/* <Button id="payment-buttons">
                <img
                  id="paypal"
                  src="https://pairroxz.com/blog/wp-content/uploads/2020/08/PayPal.png"
                  alt=""
                />
                <Text marginLeft={"5px"} fontSize={"sm"}>
                  Pay Later
                </Text>
              </Button> */}
              <Link to="/order" style={{textDecoration: "none"}}>
                <Button id="checkout-button">Proceed to checkout</Button>
              </Link>
            </Box>
            <Box>Two ways easy to pay</Box>
            {/* <Box id="easy-pay">
              <Text>
                $10 off $200 when paying with PayPal or credit/debit card
              </Text> */}
            {/* </Box> */}
          </Box>
        </Box>
        {/* Relevant Items */}
        <br />
        <br />
        <Box>
          <Text id="relevant_head">More Relavent Items to consider</Text>
          <br />
          {/* <Box className="carousel-wrapper">
            <Carousel pagination={false} breakPoints={breakPoints}>
              {CarouselData.map((item) => (
                <Box key={item.id}>
                  <CarouselItem
                    id={item.id}
                    image={item.prod_image}
                    name={item.prod_title}
                    price={` ₹ ${item.price}`}
                  />
                </Box>
              ))}
            </Carousel>
          </Box> */}
        </Box>
      </Box>
      <Box bgColor={"blue.50"} paddingTop={"5"}>
        <img
          id="payment-partners"
          src="https://content1.geekbuying.com/V1.4/en/images/shopcart_footicon.png"
          alt=""
        />
        <Text fontSize={"sm"} textAlign={"center"}>
          © 2012-2022 Geekbuying.com. All rights reserved.
        </Text>
        <br />
      </Box>
    </div>
  );
};

export default CartPage;
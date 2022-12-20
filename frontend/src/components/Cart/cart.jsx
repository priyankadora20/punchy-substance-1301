import { Box, Text, Button, color, Image, Heading, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import Carousel from "react-elastic-carousel";
import CarouselItem from "./carousalItem.jsx";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import CommonHeader from "../Cart/CommonHeader";
import {FaHome,FaShoppingBag} from "react-icons/fa"

const CarouselData=
[
  {
       "id": 1,
        "image": "https://cdn.shopify.com/s/files/1/0536/8571/5128/products/01_220dc111-f338-4859-ac34-e872f222554d_1000x.jpg?v=1630558053",
        "title": "Rice Cooker",
        "price": 5000,
  },
  {
       "id": 2,
        "image": "https://www.lg.com/in/images/tvs/md07554883/thumbnail/55UQ7500PSF-350-02.jpg",
        "title": "LG Tv",
        "price": 15000,
  },
  {
       "id": 3,
        "image": "https://www.lg.com/in/images/tvs/md07554883/thumbnail/55UQ7500PSF-350-02.jpg",
        "title": "One Plus Tv",
        "price": 25000,
  },
  {
       "id": 4,
        "image": "data:image/jpeg;base64,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",
        "title": "Google pixle watch",
        "price": 35000,
  },
  {
       "id": 5,
        "image": "https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg",
        "title": "One Plus smart watch",
        "price": 25000,
  },
  {
       "id": 6,
        "image": "https://cdn1.smartprix.com/rx-ioKTQfBn2-w1200-h1200/oKTQfBn2.jpg",
        "title": "One Plus Nord",
        "price": 23000,
  },
  {
       "id": 7,
        "image": "https://i.gadgets360cdn.com/products/large/motorola-edge-30-pro-657x800-1645713862.jpg",
        "title": "Motorola Plus",
        "price": 9999,
  },
  {
       "id": 8,
        "image": "https://www.reliancedigital.in/medias/Oppo-K10-Smartphone-492849761-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0Mzg1MzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGNjL2gxYS85ODcwMzI4MTM1NzEwLmpwZ3w5NGViYzVhODFlMDBkOWU0ZTVmMTcyNDgzYjg0ZGQwY2FhNTIzMWI0YzZjMjlhMGU3NTA3Zjk1ZmEzYzc1MjMz",
        "title": "Oppo",
        "price": 25000,
  },
]

const CartPage = () => {

  
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0)
  const [flag,setFlag]=useState(false)
  let grandTotal= 0;
  let count=cartItems.length;
  


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 6, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 4 },
  ];

  // useEFFECT

  useEffect(() => {
    fetchItem()
  },[]);
// console.log(cartItems)
const fetchItem=async()=>{
  const response=await fetch("https://wild-tan-puffer-veil.cyclic.app/cart");
  const res=await response.json();
  setCartItems(res);
}
// callback func

useEffect(()=>{
  cartItems.length?setFlag(false):setFlag(true)
},[cartItems])

const getmrp= (data)=>{
  grandTotal += data
  // console.log(data,"data");
 setSum(grandTotal)
 

}
  return (
    <>
    {
      !flag&&<div>
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
                  <CartItem getmrp= {getmrp} sum= {sum} setSum={setSum} _id={item._id} name= {item.title} image= {item.image} price= {item.price} get={fetchItem}/>
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
          <Box className="carousel-wrapper">
            <Carousel pagination={false} breakPoints={breakPoints}>
              {CarouselData.map((item) => (
                <Box key={item.id}>
                  <CarouselItem
                    id={item.id}
                    image={item.image}
                    name={item.title}
                    price={` ₹ ${item.price}`}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
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
    }
    {
      flag&&<Box  width='70%' m="auto" mt="100px">
      <Box mt='150px' display={{base:'block',md:'block',lg:'flex'}} justifyContent='space-around' >
         <Box w={{base:'100%',md:'90%',lg:'50%'}} m='auto'>
            <Image src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif" h="100%" w='100%'/>
         </Box>
         <Box w={{base:'100%',md:'90%',lg:'48%'}} textAlign='center' pt='15%' m='auto'>
             <Heading>Cart is Empty !</Heading>
             <Divider orientation='horizontal' margin='auto' mt="20px" />
             <Link to='/'><Button w={{base:'100%',md:'90%',lg:'80%'}} p='30px' fontSize='22px' className="btnhv" colorScheme='teal' mt='50px'><FaShoppingBag color='white' fontSize={25}/> Continue Shopping</Button></Link>
         </Box>
      </Box>
 </Box>
    }
    </>
  );
};

export default CartPage;
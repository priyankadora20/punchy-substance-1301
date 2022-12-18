import { Alert, AlertIcon, Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bestseller } from "./bestseller"
import ClockLoader from "react-spinners/ClockLoader";
import { useSelector } from "react-redux"

export const SingleProduct=()=>{
    const {productID}=useParams()
    const [data,setData]=useState([])
    const [cart,setCart]=useState([])
    const [loading,setLoading]=useState(false)
    const [showalert,setShowalert]=useState(false)
    const [lgalert,setLgalert]=useState(false)
    const [logged,setLogged]=useState(false)
    const {isAuth}=useSelector(e=>e.authreducer)
    
    const getsingledata=useCallback(()=>{
        return axios.get(`http://localhost:8500/products/${productID}`)
                .then((res) => {
                    setLoading(false)
                    setData(res.data)
                })
                .catch(err=>{
                    setLoading(false)
                    console.log(err)})
    },[setData,productID])

    const getcartdata=useCallback(()=>{
        return axios.get("http://localhost:8500/cart")
        .then(res=>{
            setCart(res.data)
        })
    },[setCart])
    
    useEffect(()=>{
        setLoading(true)
        window.scrollTo(0, 0);
        getsingledata()
        getcartdata()
    },[getsingledata,getcartdata])

    
    const [simple]=data
    const addproduct=()=>{
        if(isAuth){
            const match=cart.filter((el)=>el._id==simple._id)
        if(match.length>0){
            setLgalert(true)
            setTimeout(()=>{
            setLgalert(false)
            },3000)
        }else{
        fetch("http://localhost:8500/cart/addtocart",{
            method:'POST',
            body:JSON.stringify(simple),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            getcartdata()
            setShowalert(true)
            setTimeout(()=>{
            setShowalert(false)
            },3000)
        })
        .catch(err=>console.log(err))
    }
        }else{
            setLogged(true)
            setTimeout(()=>{
                setLogged(false)
            },3000)
        }
    }
    return(
        <>
        {
          loading&&<Box width='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'><ClockLoader
          color={'teal'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /></Box>
        }
        {
            !loading&&<Box>
            <Box display={{base:'block',md:'flex',lg:'flex'}} w={{base:'100%',md:'90%',lg:'80%'}} margin='auto' mt='150px'  justifyContent='space-between'>
               <Box w={{base:'80%',md:'50%',lg:'40%'}} display='flex' gap='5%' m={{base:'auto'}}>
                  <Box width='80%'  >
                     {
                       data?.map((el,ind)=>{
                           return(
                               <Box key={ind}>
                                <Image src={el.image} h='100%' w='100%'/>
                                </Box>
                           )
                       })
                     }
                  </Box>
               </Box>
               <Box w={{base:'90%',md:'50%',lg:'55%'}}  display='flex' flexDirection='column' gap='20px' m={{base:'auto',md:'0',lg:'0'}} pl={{base:'0',md:'100px',lg:'100px'}} >
                    <Box  mt='20px' lineHeight='50px'>
                       <Heading fontSize='25px' color='gray'>Gadget Stop</Heading>
                       <Text fontSize='25px' color='gray'>{simple?.category}</Text>
                    </Box><Divider orientation='horizontal'  margin='auto'/>
                    <Box   width='55%' display='flex' alignItems='center'>
                       <Heading>₹ {simple?.price}</Heading>
                       <Heading fontSize={20} textDecoration='line-through' color='teal' ml='20px'>₹ {simple?.listPrice}</Heading>
                    </Box>
                    <Divider orientation='horizontal'  margin='auto'/>
                    <Text>inclusive of all taxes</Text>
                    <Divider orientation='horizontal'  margin='auto'/>
                    <Box  display='flex' flexDirection='column' gap='30px' color='white'>
                       <Button className="btnhv" p='30px' w={{base:'100%',md:'60%',lg:'60%'}} borderRadius='20px' colorScheme='teal' onClick={addproduct}>ADD TO CART</Button>
                       <Button className="btnhv" p='30px' w={{base:'100%',md:'60%',lg:'60%'}} borderRadius='20px' colorScheme='teal'>ADD TO WISHLIST</Button>
                    </Box>
                  
               </Box>
           
           </Box>
           <Box w='80%' m='auto' mt='50px'>
             <Heading fontSize='24px' color='gray'>{simple?.title}</Heading>
           </Box>
            <Heading fontSize='24px' textAlign='center' mt='50px'>Also Recommended</Heading>
             <Bestseller/>
             <Box>
           {
               showalert&&<Box w='30%' position='absolute'  top='-10' right='0'><Alert status='success'>
               <AlertIcon />
                    Product added to cart
           </Alert></Box>
           }
       </Box>
       <Box>
          {
            lgalert&&<Box w='30%' position='absolute'  top='-10' right='0'>
                <Alert status='error'>
                    <AlertIcon />
                    Product already added to cart
                </Alert>
            </Box>
          }
       </Box>
       <Box>
          {
            logged&&<Box w='30%' position='absolute'  top='-10' right='0'>
                <Alert status='error'>
                    <AlertIcon />
                    Please Login first
                </Alert>
            </Box>
          }
       </Box>
        </Box>
        }
        </>
    )
}
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popularbrands.css"


export const Popularbrands = () => {
    const [topran, setTopran] = React.useState([])
    const [first,setFirst]=React.useState([])
    const [second,setSecond]=React.useState([])
    const [third,setThird]=React.useState([])
    const [fourth,setFourth]=React.useState([])

    
    function getMultipleRandom(topran, num) {
    const shuffled = [...topran].sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, num);
    }

    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setTopran(res.data))
    }, [])

    React.useEffect(()=>{
        setFirst(getMultipleRandom(topran, 4));
        setSecond(getMultipleRandom(topran, 3))
        setThird(getMultipleRandom(topran, 2)) 
        setFourth(getMultipleRandom(topran, 1))  
  },[topran])


    return (
        <Box mt='50px' w='100%' bgColor='#F1F6FD' pb='30px'>
            <Box display='flex' w='95%' m='auto' h='300px' mt='20px' gap='20px' p='20px'>
                <Box w={{base:'33%',md:'33%',lg:"24%"}} h='100%'>
                    <Image src='https://img.gkbcdn.com/bn/2212/LOKMATTIMEPRO-638d8d152b40c93c74f9ec1f._p1_.jpg' h='100%' w='100%'/>
                </Box>
                <Box w={{base:'48%',md:'66%',lg:"76%"}}  h='100%'  justifyContent='space-between' className="firsts" >
                        {
                            first.length > 0 && first.map((el, ind) => {
                                return (
                                    <Box key={ind} width='23%'>
                                        <Image src={el.image} h='100%' w='100%'/>
                                    </Box>                                
                                )
                            })
                        }
                </Box>
                <Box w='72%'  h='100%'  justifyContent='space-between' className="seconds" >
                        {
                            second.length > 0 && second.map((el, ind) => {
                                return (
                                    <Box key={ind} width='33%'>
                                        <Image src={el.image} h='100%' w='100%'/>
                                    </Box>                                
                                )
                            })
                        }
                </Box>
                <Box w='66%'  h='100%'  justifyContent='space-between' className="thirds" >
                        {
                            third.length > 0 && third.map((el, ind) => {
                                return (
                                    <Box key={ind} width='480%'>
                                        <Image src={el.image} h='100%' w='100%'/>
                                    </Box>                                
                                )
                            })
                        }
                </Box>
                <Box w='50%'  h='100%'  justifyContent='space-between' className="fourths" >
                        {
                            fourth.length > 0 && fourth.map((el, ind) => {
                                return (
                                    <Box key={ind} width='100%'>
                                        <Image src={el.image} h='100%' w='100%'/>
                                    </Box>                                
                                )
                            })
                        }
                </Box>
            </Box>
        </Box>
    )
}
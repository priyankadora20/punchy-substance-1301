import { Box,Image } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/popularbrands.css"
import ClockLoader from "react-spinners/ClockLoader";


export const Popularbrands = () => {
    const [topran, setTopran] = React.useState([])
    const [first,setFirst]=React.useState([])
    const [second,setSecond]=React.useState([])
    const [third,setThird]=React.useState([])
    const [fourth,setFourth]=React.useState([])
    const [loading,setLoading]=React.useState(false)

    
    function getMultipleRandom(topran, num) {
    const shuffled = [...topran].sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, num);
    }

    React.useEffect(() => {
        setLoading(true)
        axios.get("https://wild-tan-puffer-veil.cyclic.app/products")
            .then((res) => {
                setLoading(false)
                setTopran(res.data)
            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
            })
    }, [])

    React.useEffect(()=>{
        setFirst(getMultipleRandom(topran, 4));
        setSecond(getMultipleRandom(topran, 3))
        setThird(getMultipleRandom(topran, 2)) 
        setFourth(getMultipleRandom(topran, 1))  
  },[topran])


    return (
        <>
        {
           loading&&<Box width='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'><ClockLoader
           color={'white'}
           loading={loading}
           size={150}
           aria-label="Loading Spinner"
           data-testid="loader"
         /></Box>
        }
        {
            !loading&&<Box mt='50px' w='80%' m='auto' bgColor='#F1F6FD' pb='30px' >
            <Box display='flex' w='95%' m='auto' h='300px' mt='20px' gap='20px' p='20px'>
                <Box w={{base:'33%',md:'33%',lg:"24%"}} h='100%'>
                    <Link to='/product'><Image src='https://img.gkbcdn.com/bn/2212/LOKMATTIMEPRO-638d8d152b40c93c74f9ec1f._p1_.jpg' h='100%' w='100%'/></Link>
                </Box>
                <Box w={{base:'48%',md:'66%',lg:"76%"}}  h='100%'  justifyContent='space-between' className="firsts" >
                        {
                            first.length > 0 && first.map((el, ind) => {
                                return (
                                    <Box key={ind} width='23%'>
                                        <Link to={`/product/${el._id}`} ><Image src={el.image} h='100%' w='100%'/></Link>
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
        }
        </>
    )
}
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import axios from "axios";
import { Trendingcategory } from "../components/trendingcategory";
import { Newforyou } from "../components/newforyou";
import { Floatingmenu } from "../components/floatingmenu";
import { Bestseller } from "../components/bestseller";
import { Popularbrands } from "../components/popularbrands";
import { Particle } from "../components/particle";
import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

const car_data = [
    {
        img: "https://img.gkbcdn.com/bn/2211/740x670-6384410a2b40c94178577f9b._p1_.jpg"
    },
    {
        img: "https://img.gkbcdn.com/bn/2212/740x670-6396ff032b40c9401069edf5._p1_.jpg"
    },
    {
        img: "https://img.gkbcdn.com/bn/2211/740x670-6384700b2b40c916cc6fe91c._p1_.jpg"
    },
    {
        img: "https://img.gkbcdn.com/bn/2212/740x670-639688752b40c948ecac5d23._p1_.jpg"
    },
    {
        img: "https://img.gkbcdn.com/s3/bn/2212/740x670-639825612b40c93b1474bd0b.jpg"
    },
]
export const Landing = () => {

    const [topran, setTopran] = React.useState([])
    const [first, setFirst] = React.useState([])
    const [second, setSecond] = React.useState([])
    const [loading,setLoading]=React.useState(false)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    function getMultipleRandom(topran, num) {
        const shuffled = [...topran].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);

    }

    React.useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0);
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

    useEffect(() => {
        setFirst(getMultipleRandom(topran, 4));
        setSecond(getMultipleRandom(topran, 4));
    }, [topran])
    return (
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
            !loading&&<Box id="top" >
            <Particle />
            <Box w='80%' m='auto' h='550px' boxSizing="border-box" mt='100px' >
                <Box w='100%' display='flex' flexDirection={{ base: 'column', md: 'column', lg: 'row' }} justifyContent='space-between' >
                    <Box w={{ base: '100%', md: '100%', lg: '39%' }} h='550px'>
                        <Link to='/product'><Slider {...settings} h='100%'>
                            {
                                car_data.map((el, ind) => {
                                    return <Image src={el.img} h='530px' alt='image' key={ind} />
                                })
                            }
                        </Slider></Link>
                    </Box>
                    <Box w={{ base: '100%', md: '100%', lg: '60%' }} h='550px' display='flex' flexDirection='column' gap='30px'>
                        <Box display='flex' flexDirection='column' gap='30px' h='250px' bgColor='#F1F6FD' p='20px'>
                            <Box h='20%'>
                                <Heading fontSize='20px'>Deal of the Day</Heading>
                            </Box>
                            <Box display='flex' justifyContent='space-between' h='80%' textAlign='center'>
                                {
                                    first.length > 0 && first.map((el, ind) => {
                                        return (
                                            <Box w='23%' key={ind}>
                                                <Link to={`/product/${el._id}`}><Image src={el.image} h={{base:'70%',md:'70%',lg:'70%'}} w='100%' /></Link>
                                                <Text fontSize={{ base: '13px', md: '15px', lg: '17px' }} h='20%' mt='5%'>₹ {el.price}</Text>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        <Box display='flex' flexDirection='column' gap='10px' h='250px' bgColor='#F1F6FD' p='20px'>
                            <Box h='20%'>
                                <Heading fontSize='20px'>Featured Products</Heading>
                            </Box>
                            <Box display='flex' justifyContent='space-between' h='80%' >
                                {
                                    second.length > 0 && second.map((el, ind) => {
                                        return (
                                            <Box w='23%' key={ind}  h='100%'>
                                                <Box w='100%' h='100%' textAlign='center'>
                                                    <Link to={`/product/${el._id}`} ><Image src={el.image} h={{base:'70%',md:'70%',lg:'60%'}} w='100%' /></Link>
                                                    <Text h='20%' fontSize={{ base: '13px', md: '15px', lg: '17px' }} w='100%' mt='5%'>{el.category}</Text>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                </Box>
                <Trendingcategory />
                <Newforyou />
                <Box mt='50px'>
                    <Bestseller />
                </Box>
                <Box display='flex' alignItems='center' m='auto' justifyContent='center' mt='100px'>
                    <Heading color='white'>Popular Brands</Heading>
                </Box>
                <Popularbrands />
                <Popularbrands />
                <Popularbrands />
                <Floatingmenu />
            </Box>
        }
        </>
            
        

    )
}
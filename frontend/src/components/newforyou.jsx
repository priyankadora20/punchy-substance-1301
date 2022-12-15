import { Box, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Newforyou = () => {
    const [topran, setTopran] = React.useState([])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        initialSlide: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setTopran(res.data))
    }, [])


    return (
        <Box  w='80%' m='auto' mt='50px' bgColor='#F1F6FD' pb='30px'>
            <Box display='flex' alignItems='center' gap='20px' w='95%' m='auto'>
                <Heading >New For You</Heading>
                <Link><Text color='blue'>See More</Text></Link>
            </Box>
            <Box display='flex' w='95%' m='auto' h='300px' mt='20px' gap='20px' >
                <Box w={{base:'40%',md:'33%',lg:"24%"}} h='100%'>
                    <Image src='https://img.gkbcdn.com/bn/2212/LOKMATTIMEPRO-638d8d152b40c93c74f9ec1f._p1_.jpg' h='100%' w='100%'/>
                </Box>
                <Box w={{base:'48%',md:'66%',lg:"72%"}} h='100%'>
                    <Slider {...settings}>

                        {
                            topran.length > 0 && topran.map((el, ind) => {
                                return (
                                    <Box key={ind}>
                                        <Image src={el.image} h='300px' w='93%'/>
                                    </Box>                                
                                )
                            })
                        }

                    </Slider>
                </Box>
            </Box>
        </Box>
    )
}
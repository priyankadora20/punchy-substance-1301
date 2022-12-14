import { Box, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Bestseller = () => {
    const [topran, setTopran] = React.useState([])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <Box mt='50px' w='100%'  pb='30px'>
            <Box display='flex' alignItems='center' gap='20px' w='95%' m='auto'>
                <Heading >Best Sellers</Heading>
                <Link><Text color='blue'>See More</Text></Link>
            </Box>
            <Box display='flex' w='100%' m='auto' h='350px' mt='20px' gap='20px' >
                <Box w='100%' h='100%'>
                    <Slider {...settings}>

                        {
                            topran.length > 0 && topran.map((el, ind) => {
                                return (
                                    <Box key={ind} textAlign='center'>
                                        <Image src={el.image} h='300px' w='96%'/>
                                        <Text h='80px' mt='10px' w='96%'>{el.title}</Text>
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
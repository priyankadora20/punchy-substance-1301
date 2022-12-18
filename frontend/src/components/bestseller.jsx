import { Box, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClockLoader from "react-spinners/ClockLoader";


export const Bestseller = () => {
    const [topran, setTopran] = React.useState([])
    const [loading,setLoading]=React.useState(false)


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
      setLoading(true)
        axios.get("http://localhost:8500/products")
            .then((res) => {
              setLoading(false)
              setTopran(res.data)
            })
            .catch(err=>{
              setLoading(false)
              console.log(err)
            })
    }, [])


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
          !loading&&<Box   w='80%' m='auto' pb='30px'>
          <Box display='flex' alignItems='center' justifyContent='space-between' w='95%' m='auto' >
              <Heading color='white'>Best Sellers</Heading>
              <Link to='/product'><Text color='white'>See More</Text></Link>
          </Box>
          <Box display='flex' w='100%' m='auto' h='350px' mt='20px' gap='20px' >
              <Box w='100%' h='100%'>
                  <Slider {...settings}>

                      {
                          topran.length > 0 && topran.map((el, ind) => {
                              return (
                                  <Link to={`/product/${el._id}`} key={ind}><Box textAlign='center' color='white'>
                                      <Image src={el.image} h='300px' w='96%'/>
                                      <Text h='80px' mt='10px' w='96%'>{el.title}</Text>
                                  </Box></Link>                                
                              )
                          })
                      }

                  </Slider>
              </Box>
          </Box>
      </Box>
        }
        </>
    )
}
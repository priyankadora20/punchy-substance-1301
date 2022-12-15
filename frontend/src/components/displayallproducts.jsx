import { Box, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import {Floatingmenu} from "./floatingmenu"
import { useLocation, useSearchParams } from "react-router-dom"


export const DisplayAP=()=>{
    const [topran, setTopran] = React.useState([])
    const [searchParams]=useSearchParams()
    const location=useLocation()

    function get(queryParams){
        axios.get("https://plum-perfect-anemone.cyclic.app/product",queryParams)
            .then((res) => setTopran(res.data))
            .catch(err=>console.log(err))
    }

    React.useEffect(() => {
        if(location){
            const category=searchParams.getAll("category");
            
            const queryParams={
                params:{
                    category:category,
                    _sort: searchParams.get('sortby') && "price",
                    _order: searchParams.get('sortby')
                }
            }
            
            get(queryParams)
        }
        
        
    }, [location,searchParams])
    return(
        <Box w='100%' m='auto' display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))'  gridTemplateRows='auto'  gap='20px' mt='20px'>
            {
                topran.length>0&&topran.map((el,ind)=>{
                    return(
                        <Box className="hisingle" textAlign='center' h='300px' bgColor='white' display='flex' flexDirection='column' gap='2%' p='20px' key={ind}>
                            <Image src={el.image} w='100%' h='55%'/>
                            <Text >{el.category}</Text>
                            <Text >{el.price}</Text>
                            <Text >{el.title}</Text>
                        </Box>
                    )
                })
            }
            <Floatingmenu/>
        </Box>
    )
}
import { Box, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
import {Floatingmenu} from "./floatingmenu"
import { useLocation, useSearchParams } from "react-router-dom"
import { ProductPagination } from "./productpagination"

const validpage=(val)=>{
    val=Number(val);
    if(typeof val==="number"&&val<=0){
        val=1;
    }
    if(!val){
        val=1;
    }
    return val
}
export const DisplayAP=()=>{
    const [topran, setTopran] = React.useState([])
    const [searchParams]=useSearchParams()
    const [page,setPage]=useState(validpage(searchParams.get("page"))||1)
    const [totalpage,setTotalpage]=useState(0)
    const location=useLocation()
    
    function get(queryParams){
        axios.get("https://plum-perfect-anemone.cyclic.app/product",queryParams)
            .then((res) => {
                // localStorage.setItem("high",res.headers.get("X-Total-Count"))
                setTotalpage(Math.ceil(Number(res.headers.get("X-Total-Count"))/10))
                setTopran(res.data)
            })
            .catch(err=>console.log(err))
    }

    React.useEffect(() => {

        if(location){
            const category=searchParams.getAll("category");
            const lowerlimit=searchParams.get("from")
            const upperlimit=searchParams.get("upto")
            // const currpage=searchParams.get("page")
            const queryParams={
                params:{
                    category:category,
                    price_gte:Number(lowerlimit),
                    price_lte:Number(upperlimit)||Math.max,
                    _page:page,
                    _limit:10,
                    _sort: searchParams.get('sortby') && "price",
                    _order: searchParams.get('sortby')
                }
            }
            get(queryParams)
        }
        
        
    }, [location.search,searchParams,page])
    return(
        <Box>
            <Box w='100%' m='auto' display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))'  gridTemplateRows='auto'  gap='20px' mt='20px'>
            {
                topran.length>0&&topran.map((el,ind)=>{
                    return(
                        <Box className="hisingle" textAlign='center' h='300px' bgColor='white' display='flex' flexDirection='column' gap='2%' p='20px' key={ind}>
                            <Image src={el.mainImage} w='100%' h='55%'/>
                            <Text >{el.category}</Text>
                            <Text >{el.price}</Text>
                            <Text >{el.title}</Text>
                        </Box>
                    )
                })
            }
                <Floatingmenu/>
            </Box>
            <Box >
                <ProductPagination totalpages={totalpage} currpage={page} handlepage={page=>setPage(page)}/>
            </Box>
        </Box>
    )
}
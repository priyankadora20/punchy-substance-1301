import { Box, Button, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const Sidebarfilter=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [product,setProduct]=useState(searchParams.getAll("products")||[])
    const [category,setCategory]=useState(searchParams.getAll("category")||[])

    const handlefilter=(e)=>{
        const option=e.target.value
        let newcategory=[...product];
        // console.log(newcategory,category)
        if(newcategory.includes(option)){
            newcategory.splice(newcategory.indexOf(option),1)
        }else{
            newcategory.push(option);
        }
        setProduct(newcategory)
    }

    useEffect(()=>{
        const params={}
        product&&(params.product=product);
        // console.log(params)
        setSearchParams(params);
    },[product,setSearchParams])
    return(
        <Box  p='20px' bgColor='white' className="hisingle">
           <Box textAlign='center'> 
             <Heading fontSize='20px' color='gray'>All Categories</Heading>
           </Box>
           <Box display='flex' flexDirection='column' gap='20px' mt='20px'>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="gadget" defaultChecked={product.includes("gadget")} onChange={handlefilter} />
                    <label>gadget</label>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="cycle" defaultChecked={product.includes("cycle")} onChange={handlefilter} />
                    <label>cycle</label>
                </Box>
            </Box>
        </Box>
    )
}
import { Box, Button, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const Sidebarfilter=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [category,setCategory]=useState(searchParams.getAll("category")||[])

    const handlefilter=(e)=>{
        const option=e.target.value
        let newcategory=[...category];
        if(newcategory.includes(option)){
            newcategory.splice(newcategory.indexOf(option),1)
        }else{
            newcategory.push(option);
        }
        setCategory(newcategory)
    }

    useEffect(()=>{
        const params={}
        category&&(params.category=category);
        setSearchParams(params);

    },[category,setSearchParams])
    return(
        <Box  p='20px' bgColor='white' className="hisingle">
           <Box textAlign='center'> 
             <Heading fontSize='20px' color='gray'>All Categories</Heading>
           </Box>
           <Box display='flex' flexDirection='column' gap='20px' mt='20px'>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="Beachwear" defaultChecked={category.includes("Beachwear")} onChange={handlefilter} />
                    <label>Beachwear</label>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="Suits" defaultChecked={category.includes("Suits")} onChange={handlefilter} />
                    <label>Suits</label>
                </Box>
            </Box>
        </Box>
    )
}
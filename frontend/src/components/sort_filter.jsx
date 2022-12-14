import { Box, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const Funtionality=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [category,setCategory]=useState(searchParams.getAll("category")||[])
    const [sortby,setSortby]=useState(searchParams.get("sortby")||"")

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

    const handlesort=(e)=>{
        setSortby(e.target.value)
    }
    useEffect(()=>{

        const params={}
        category&&(params.category=category);
        sortby&&(params.sortby=sortby)
        setSearchParams(params);

    },[category,setSearchParams,sortby])

     return(
        <Box w='100%' m='auto' p='20px' className="hisingle" bgColor='white'>
            <Box display='flex' gap='2%' alignItems='center'>
                <Box w='20%' color='gray'>
                    <Heading fontSize='18px'>Filter :</Heading>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="Beachwear" defaultChecked={category.includes("Beachwear")} onChange={handlefilter} />
                    <label>Beachwear</label>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="checkbox" value="Suits" defaultChecked={category.includes("Suits")} onChange={handlefilter} />
                    <label>Suits</label>
                </Box>
            </Box>
            <Box onChange={handlesort} display='flex' gap='2%' alignItems='center' mt='20px'>
                <Box w='20%' color='gray'>
                    <Heading fontSize='18px'>Sort By :</Heading>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="radio" name="sortBy" value="asc" defaultChecked={sortby === 'asc'} />
                    <label>Increasing</label>
                </Box>
                <Box display='flex' gap='10px'>
                    <input type="radio" name="sortBy" value="desc" defaultChecked={sortby === 'desc'}/>
                    <label >Decreasing</label>
                </Box>
            </Box>
            
            
        </Box>
     )
}
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const init={
    upper:"",
    lower:""
}

// const validpage=(val)=>{
//     val=Number(val);
//     if(typeof val==="number"&&val<=0){
//         val=1;
//     }
//     if(!val){
//         val=1;
//     }
//     return val
// }
export const Funtionality=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [category,setCategory]=useState(searchParams.getAll("category")||[])
    const [sortby,setSortby]=useState(searchParams.get("sortby")||"")
    const [range,setRange]=useState(init);
    // const [page,setPage]=useState(validpage(searchParams.get("page"))||1)


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

    const handlelimit=(e)=>{
        setRange({...range,[e.target.name]:e.target.value})
    }

    // const handlerange=()=>{
    //     console.log(range)
    // }
    // const x=Number(localStorage.getItem("high"))
    

    const handlesort=(e)=>{
        setSortby(e.target.value)
    }
    useEffect(()=>{
        const params={}
        category&&(params.category=category);
        // page&&(params.page=page)
        sortby&&(params.sortby=sortby)
        range.lower&&(params.from=range.lower)
        range.upper&&(params.upto=range.upper)
        setSearchParams(params);

    },[category,setSearchParams,sortby,range])
     return(
        <Box w='100%' m='auto' p='20px' className="hisingle" bgColor='white'>
            <Box display='flex' justifyContent='space-between' alignItems='center' w='100%'>
                <Box w='10%' color='gray'>
                    <Heading fontSize='18px'>Filter :</Heading>
                </Box>
                <Box display='flex' gap='10px' w='10%'>
                    <input type="checkbox" value="Beachwear" defaultChecked={category.includes("Beachwear")} onChange={handlefilter} />
                    <label>Beachwear</label>
                </Box>
                <Box display='flex' gap='10px' w='10%'>
                    <input type="checkbox" value="Suits" defaultChecked={category.includes("Suits")} onChange={handlefilter} />
                    <label>Suits</label>
                </Box>
                <Box display='flex' gap='10px' w='40%'  alignItems='center'>
                    <Heading fontSize='18px' w='30%'>Price :</Heading>
                    <Input placeholder="from" name='lower' value={range.lower} onChange={handlelimit} w='30%'/>
                    <Input placeholder="to" name='upper' value={range.upper} onChange={handlelimit} w='30%'/>
                    {/* <Button onClick={handlerange}>set</Button> */}
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
                {/* <Box display='flex'>
                    <Button onClick={()=>setPage(page-1)} disabled={page==1}>-</Button>
                    <Text>{page}</Text>
                    <Button disabled={page==Math.ceil(x/10)} onClick={()=>setPage(page+1)}>+</Button>
                </Box> */}
            </Box>
            
            
        </Box>
     )
}
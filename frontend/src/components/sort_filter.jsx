import { Box, Heading, Input } from "@chakra-ui/react"
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
        // console.log(params)
        setSearchParams(params);

    },[category,setSearchParams,sortby,range])
     return(
        <Box w='100%' m='auto' p='20px'  bgColor='white' borderRadius='20px'>
            <Box display={{base:"flex",md:"flex",lg:"block"}} gap='2%'>
                <Box display={{base:"block",md:"block",lg:"flex"}} justifyContent='space-between' alignItems='center' w={{base:"50%",md:"50%",lg:"100%"}} >
                    <Box w={{base:"100%",md:"100%",lg:"8%"}} color='gray'>
                        <Heading fontSize='18px'>Filter :</Heading>
                    </Box>
                    <Box display='flex' gap='5%' w={{base:"100%",md:"100%",lg:"5%"}}>
                        <input type="checkbox" value="laptop" defaultChecked={category.includes("laptop")} onChange={handlefilter} />
                        <label>laptop</label>
                    </Box>
                    <Box display='flex' gap='5%' w={{base:"100%",md:"100%",lg:"10%"}}>
                        <input type="checkbox" value="headphones" defaultChecked={category.includes("headphones")} onChange={handlefilter} />
                        <label>headphones</label>
                    </Box>
                    <Box display='flex' gap='5%' w={{base:"100%",md:"100%",lg:"8%"}}>
                        <input type="checkbox" value="e-bikes" defaultChecked={category.includes("e-bikes")} onChange={handlefilter} />
                        <label>e-bikes</label>
                    </Box>
                    <Box display='flex' gap='5%' w={{base:"100%",md:"100%",lg:"13%"}}>
                        <input type="checkbox" value="3d printer" defaultChecked={category.includes("3d printer")} onChange={handlefilter} />
                        <label>3d printer</label>
                    </Box>
                    <Box display='flex' gap='5%' w={{base:"100%",md:"100%",lg:"10%"}}>
                        <input type="checkbox" value="speakers" defaultChecked={category.includes("speakers")} onChange={handlefilter} />
                        <label>speakers</label>
                    </Box>
                </Box>
                <Box display={{base:"block",md:"block",lg:"flex"}} gap='2%' w={{base:"48%",md:"48%",lg:"100%"}}  alignItems='center' mt='20px'>
                    <Heading fontSize='18px' w={{base:"100%",md:"100%",lg:"20%"}} color='gray'>Price :</Heading>
                    <Input placeholder="from" name='lower' value={range.lower} onChange={handlelimit} w={{base:"100%",md:"100%",lg:"50%"}}/>
                    <Input placeholder="to" name='upper' value={range.upper} onChange={handlelimit} w={{base:"100%",md:"100%",lg:"50%"}}/>
                    {/* <Button onClick={handlerange}>set</Button> */}
                </Box>
            </Box>
            <Box onChange={handlesort} display={{base:"block",md:"block",lg:"flex"}} gap='2%' alignItems='center' mt='20px'>
                <Box w={{base:"100%",md:"100%",lg:"15%"}} color='gray'>
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
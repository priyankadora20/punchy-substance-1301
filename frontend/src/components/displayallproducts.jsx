import { Box, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
import {Floatingmenu} from "./floatingmenu"
import { useLocation, useSearchParams } from "react-router-dom"
import { ProductPagination } from "./productpagination"
import { Link } from "react-router-dom"
import ClockLoader from "react-spinners/ClockLoader";
import "./styles/productpage.css"
// import {FaHome,FaArrowUp,FaCartArrowDown,FaEye} from "react-icons/fa"

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
    const [loading,setLoading]=useState(false)
    const location=useLocation()
    
    function get(queryParams){
        axios.get("http://localhost:8500/products",queryParams)
            .then((res) => {
                setLoading(false)
                setTotalpage(Math.ceil(Number(res.data.datacount)/12))
                setTopran(res.data.data)
            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
            })
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
        if(location){
            const category=searchParams.getAll("category");
            const lowerlimit=searchParams.get("from")
            const upperlimit=searchParams.get("upto")
            // const currpage=searchParams.get("page")
            const queryParams={
                params:{
                    category:category,
                    price_gte:Number(lowerlimit),
                    price_lte:Number(upperlimit)||Infinity,
                    _page:page,
                    _limit:12,
                    _sort: searchParams.get('sortby') && "price",
                    _order: searchParams.get('sortby')
                }
            }
            setLoading(true)
            get(queryParams)
        }
        
        
    }, [location,searchParams,page])
    return(
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
        !loading&& <Box >
        <Box w='100%' m='auto' display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))'  gridTemplateRows='auto'  gap='20px' mt='20px'>
        {
            topran.length>0&&topran.map((el,ind)=>{
                return(
                    <Link to={`/product/${el._id}`} key={ind}><Box className="hisingle" textAlign='center' h='300px' bgColor='white' display='flex' flexDirection='column' gap='2%' p='20px' >
                        <Image src={el.image} w='100%' h='70%' />
                        <Heading fontSize='20px' >{el.category}</Heading>
                        <Text >₹ {el.price}</Text>
                        <Text >{el.brand}</Text>
                        {/* <Box className="overlay" >
                            <Box className="cont" display='flex' gap='30%'>
                                <a href={el.app} target="_blank"><FaEye className="prbt"  color='#7DA2A9' fontSize={50}/></a>
                                <a href={el.git} target="_blank"><FaEye className="prbt"  color='#7DA2A9' fontSize={50}/></a>
                            </Box>
                        </Box> */}
                    </Box></Link>
                )
            })
        }
            <Floatingmenu/>
        </Box>
        <Box >
            <ProductPagination totalpages={totalpage} currpage={page} handlepage={page=>setPage(page)}/>
        </Box>
    </Box>
       }
       </>
    )
}
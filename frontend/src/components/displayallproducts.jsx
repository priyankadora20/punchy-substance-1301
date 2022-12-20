import { Alert, AlertIcon, Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useCallback, useState } from "react"
import {Floatingmenu} from "./floatingmenu"
import { useLocation, useSearchParams } from "react-router-dom"
import { ProductPagination } from "./productpagination"
import { Link } from "react-router-dom"
import ClockLoader from "react-spinners/ClockLoader";
import "./styles/productpage.css"
import { FaEye , FaCartArrowDown } from "react-icons/fa"
import { useSelector } from "react-redux"


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
    const [cart, setCart] = useState([])
    const [showalert, setShowalert] = useState(false)
    const [lgalert, setLgalert] = useState(false)
    const [logged, setLogged] = useState(false)
    const { isAuth } = useSelector(e => e.authreducer)
    
    function get(queryParams){
        axios.get("https://wild-tan-puffer-veil.cyclic.app/products",queryParams)
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

    const getcartdata = useCallback(() => {
        return axios.get("https://wild-tan-puffer-veil.cyclic.app/cart")
            .then(res => {
                setCart(res.data)
            })
    }, [setCart])

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
            getcartdata()
            get(queryParams)
        }
        
    }, [location,searchParams,page,getcartdata])
    

    const addproduct = (item) => {
        if (isAuth) {
            const match = cart.filter((el) => el._id == item._id)
            if (match.length > 0) {
                setLgalert(true)
                setTimeout(() => {
                    setLgalert(false)
                }, 3000)
            } else {
                fetch("https://wild-tan-puffer-veil.cyclic.app/cart/addtocart", {
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        getcartdata()
                        setShowalert(true)
                        setTimeout(() => {
                            setShowalert(false)
                        }, 3000)
                    })
                    .catch(err => console.log(err))
            }
        } else {
            setLogged(true)
            setTimeout(() => {
                setLogged(false)
            }, 3000)
        }
    }
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
        !loading&& <Box w='100%'>
        <Box w='100%' m='auto' display='grid'  gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))'  gridTemplateRows='auto'  gap='20px' mt='20px' p='20px'>
        {
            topran.length>0&&topran.map((el,ind)=>{
                return(
                    <Box key={ind} className="hisingle" textAlign='center'  h='300px' color='white' border='1px solid #7DA2A9' borderBottom='none' borderTop='none' display='flex' flexDirection='column' gap='2%' p='20px' >
                        <Image src={el.image} w='100%' h='70%' borderRadius='20px'/>
                        <Heading fontSize='20px' >{el.category}</Heading>
                        <Text >₹ {el.price}</Text>
                        <Text >{el.brand}</Text>
                        <Box className="overlay" >
                            <Box className="cont" display='flex' gap='30%'>
                            <p onClick={()=>addproduct(el)}><FaCartArrowDown className="prbt"   fontSize={50}/></p>
                            <Link to={`/product/${el._id}`} key={ind}><FaEye className="prbt"   fontSize={50}/></Link>
                            </Box>
                        </Box>
                    </Box>
                )
            })
        }
            <Floatingmenu/>
        </Box>
        <Box >
            <ProductPagination totalpages={totalpage} currpage={page} handlepage={page=>setPage(page)}/>
        </Box>
        <Box>
                    {
                        showalert && <Box w='30%' className="alerti"><Alert status='success'>
                            <AlertIcon />
                            Product added to cart
                        </Alert></Box>
                    }
                </Box>
                <Box>
                    {
                        lgalert && <Box w='30%' className="alerti">
                            <Alert status='error'>
                                <AlertIcon />
                                Product already added to cart
                            </Alert>
                        </Box>
                    }
                </Box>
                <Box>
                    {
                        logged && <Box w='30%' className="alerti">
                            <Alert status='error'>
                                <AlertIcon />
                                Please Login first
                            </Alert>
                        </Box>
                    }
                </Box>
    </Box>
       }
       </>
    )
}
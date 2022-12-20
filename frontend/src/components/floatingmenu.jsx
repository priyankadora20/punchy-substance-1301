import { Box, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useCallback } from "react"
import {FaHome,FaArrowUp,FaCartArrowDown,FaEye} from "react-icons/fa"
import { Link } from "react-router-dom"


export const Floatingmenu=()=>{
    const [menu,SetMenu]=React.useState(false)
    const [count,setCount]=React.useState(0)
    const showtab=()=>{
        
       if(window.scrollY<=400){
        SetMenu(false)
       }else{
        SetMenu(true)
       }
    }

    const getcartdata = useCallback(() => {
        return axios.get("https://wild-tan-puffer-veil.cyclic.app/cart")
        .then(res => {
            setCount(res.data.length)
        })
    }, [showtab])

    React.useEffect(()=>{
        getcartdata()
    },[getcartdata])

    const moveup=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    window.addEventListener('scroll',showtab)
    return(
        <>
        {
            menu&&<Box  position='fixed' top='40%' right='1%' bgColor='#F1F6FD' zIndex='2' display='flex' flexDirection='column' gap='15px' p='15px'>
            <Link to='/'><FaHome fontSize='30px' color="teal"/></Link>
            <Link to='/cart'><Box display='flex'><FaCartArrowDown fontSize='30px' color="teal"/><Text bgColor='yellow' borderRadius='50%'>{count}</Text></Box></Link>
            <Link to='/product'><FaEye fontSize='30px' color="teal"/></Link>
            <FaArrowUp fontSize='30px' color="teal" onClick={moveup} cursor='pointer'/>
         </Box>
        }
        </>
    )
}
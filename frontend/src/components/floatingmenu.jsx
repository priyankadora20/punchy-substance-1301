import { Box } from "@chakra-ui/react"
import React from "react"
import {FaHome,FaArrowUp,FaCartArrowDown,FaEye} from "react-icons/fa"
import { Link } from "react-router-dom"


export const Floatingmenu=()=>{
    const [menu,SetMenu]=React.useState(false)
    
    const showtab=()=>{
        
       if(window.scrollY<=400){
        SetMenu(false)
       }else{
        SetMenu(true)
       }
    }

    const moveup=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    window.addEventListener('scroll',showtab)
    return(
        <>
        {
            menu&&<Box  position='fixed' top='40%' right='1%' bgColor='#F1F6FD' zIndex='2' display='flex' flexDirection='column' gap='15px' p='15px'>
            <Link to='/'><FaHome fontSize='30px' color="teal"/></Link>
            <Link to='/cart'><FaCartArrowDown fontSize='30px' color="teal"/></Link>
            <Link to='/product'><FaEye fontSize='30px' color="teal"/></Link>
            <FaArrowUp fontSize='30px' color="teal" onClick={moveup} cursor='pointer'/>
         </Box>
        }
        </>
    )
}
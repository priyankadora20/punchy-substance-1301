import { Box } from "@chakra-ui/react"
import React from "react"
import {HashLink as Lin} from "react-router-hash-link"
import {FaHome,FaArrowUp,FaCartArrowDown} from "react-icons/fa"
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
    window.addEventListener('scroll',showtab)
    return(
        <>
        {
            menu&&<Box  position='fixed' top='40%' right='1%' bgColor='#F1F6FD' zIndex='2' display='flex' flexDirection='column' gap='15px' p='15px'>
            <Link><FaHome fontSize='30px' color="teal"/></Link>
            <Link><FaCartArrowDown fontSize='30px' color="teal"/></Link>
            <Link><FaHome fontSize='30px' color="teal"/></Link>
            <Lin to='#top' smooth><FaArrowUp fontSize='30px' color="teal"/></Lin>
         </Box>
        }
        </>
    )
}
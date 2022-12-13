import React from 'react'
import styled from "styled-components"
const Navbar = () => {
  return (
    <>
        <NavPageWraper>
            Welcome Tech Turtles!

        </NavPageWraper>
    </>
  )
}

const NavPageWraper=styled.div`
    width:100%;
    height:20vh;
    font-size:2rem;
    text-align:center;
    background-color:blue;
    color:white;
`;
export default Navbar
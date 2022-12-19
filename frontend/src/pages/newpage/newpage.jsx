import axios from "axios";
import React from "react";
import { Floatingmenu } from "../../components/floatingmenu";
import { Particle } from "../../components/particle";
import { Funtionality } from "../../components/sort_filter";
import "../newpage/newpage.css"
import MainpageCarosole from "../slider/slidercoro";
import LikeButton from "./likebtn";

export const Newpage =()=>{
  const [newproduct, setNewproduct] = React.useState([])


  React.useEffect(() => {
    axios.get("http://localhost:8500/backend")
        .then((res) =>setNewproduct(res.data) )
        .catch(err=>console.log(err))
},[setNewproduct])

console.log(newproduct)


return(
  <>
  <div>
  <Particle />
  
  
  <div className='cardbox1'>
    <h1 className='cardbox1h'>New Arrivals</h1>
  </div >
<div className="gapgap"></div>
<Funtionality/>
  <div className='cardbox'>

  {newproduct.map(({_id,image,title,price,about})=>{
               
               return(
        <div key={_id} className='newcard' >
        <img src={image} alt="recentpoduct" id="recentpoduct"/>
        <h3>{title}</h3>
        <p>Rs:{price}/-</p>
        <p>{about}</p>
        <LikeButton/>
        </div>
               ) 
            
        })}
  
  </div>

  <Floatingmenu />
  </div>
  </>
)

}
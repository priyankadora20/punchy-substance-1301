import React from 'react';
import c1 from "../coupimg/c1.png"
import c2 from "../coupimg/c2.png";
import c3 from "../coupimg/c3.png";
import c4 from "../coupimg/c4.png";
import c5 from "../coupimg/c5.png";
import c6 from "../coupimg/c6.png";
import c7 from "../coupimg/c7.png";
import c8 from "../coupimg/c8.png";
import c9 from "../coupimg/c9.png";
import c10 from "../coupimg/c10.png";
import c12 from "../coupimg/c12.png";
import c13 from "../coupimg/c13.png";
import c14 from "../coupimg/c14.png";
import c15 from "../coupimg/c15.png";
import c16 from "../coupimg/c16.png";
import c17 from "../coupimg/c17.png";
import '../Coupon/couponpage.css';
import { Particle } from '../../components/particle';
import MainpageCarosole from '../slider/slidercoro';


const couponData =[

    {
        id:1,
        img:c1,
    },
    {
        id:2,
        img:c2,
    },
    
    {
        id:3,
        img:c3,
    },
    
    {
        id:4,
        img:c4,
    },
    
    {
        id:5,
        img:c5,
    },
    

    {
        id:6,
        img:c6,
    },
    
    {
        id:7,
        img:c7,
    },
    
    {
        id:8,
        img:c8,
    },
    
    {
        id:9,
        img:c9,
    },
    
    {
        id:10,
        img:c10,
    },
    
  
    
    {
        id:12,
        img:c12,
    },
    {
        id:13,
        img:c13,
    },
    
    {
        id:14,
        img:c14,
    },
    
    {
        id:15,
        img:c15,
    },
    
    {
        id:16,
        img:c16,
    },
    {
        id:17,
        img:c17,
    },
    {
        id:15,
        img:c15,
    },
    
    {
        id:16,
        img:c16,
    },
    {
        id:17,
        img:c17,
    }
    ,{
        id:6,
        img:c6,
    },
    
    {
        id:7,
        img:c7,
    },
    
    {
        id:8,
        img:c8,
    },,
    
    {
        id:4,
        img:c4,
    },
    
    {
        id:5,
        img:c15,
    },
    

    {
        id:6,
        img:c6,
    },
    
    {
        id:7,
        img:c7,
    },
    {
        id:5,
        img:c15,
    },,
    
    {
        id:5,
        img:c5,
    },
    {
        id:16,
        img:c16,
    },
    {
        id:17,
        img:c17,
    },
    {
        id:15,
        img:c12,
    },
    {
        id:15,
        img:c1,
    },
    

   
    
    

]

function newcoup(){
    alert("Get exculsive discount on products")
    
}

export default function Coupons() {

   
  return (
  
  <>
    <div>
    <Particle />
    <MainpageCarosole/>
        <div className='coup' >
              
              {couponData.map(({id,img})=>{
               
                     return(
              <div key={id} className='coupcard' >
              <img src={img} alt="coupon"/>
              <button id='btncoup' onClick={newcoup}>COUPON COPY</button>
              </div>
                     ) 
                  
              })}
  
        </div>

    </div>
  </>
   
  )
}

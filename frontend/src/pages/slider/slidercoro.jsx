import React from 'react';
import ImageSlider from "./ImageSlider";
import s1 from '../slider/sliderimg/s1.png';
import s2 from '../slider/sliderimg/s2.png';
import s3 from '../slider/sliderimg/s3.png';
import s4 from '../slider/sliderimg/s4.png';
import s5 from '../slider/sliderimg/s5.png';

export default function MainpageCarosole() {
    const slides = [
      { url:s1 , title: "beach" },
      { url:s2, title: "boat" },
      { url:s3 , title: "forest" },
      { url:s4 , title: "city" },
      { url:s5 , title: "italy" },
    ];
    const containerStyles = {
      width: "95%",
      height: "320px",
      margin:"auto",
    };
    return (
      <>
       <div style={containerStyles} id="contaa">
          <ImageSlider slides={slides} id="slidermain" />
        </div>
  
      </>
    )
  }
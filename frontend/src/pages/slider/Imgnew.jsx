import React from 'react';
import s1 from '../slider/sliderimg/s1.png';
import s2 from '../slider/sliderimg/s2.png';
import s3 from '../slider/sliderimg/s3.png';
import s4 from '../slider/sliderimg/s4.png';
import s5 from '../slider/sliderimg/s5.png';

export default function Imgnew() {
    return (
      <div className='imgimgimgbox'>
      <img src={s1} alt="" className='imgimgimg' />
      <img src={s2} alt="" className='imgimgimg'/>
      <img src={s3} alt=""className='imgimgimg' />
      <img src={s4} alt="" className='imgimgimg'/>
      <img src={s5} alt="" className='imgimgimg' />
  
    
      </div>
    )
  }
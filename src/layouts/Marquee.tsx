import React from 'react'
import FastMarquee  from "react-fast-marquee";
import Text1 from '../components/Marquee/Text1';
import Text2 from '../components/Marquee/Text2';

const Marquee = () => {
  return (
    <div className='mt-24 bg-red-500 border-y-2 border-primary py-4 w-full'>
        <FastMarquee >
            <Text1 text='LIKE NEVER BEFORE' />
            <Text2 text='Exclusive offers & deals' />
            <Text1 text='FEATURE PACKED' />
            <Text2 text='Easy booking' />
        </FastMarquee>
    </div>
  )
}

export default Marquee
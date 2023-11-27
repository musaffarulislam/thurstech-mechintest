import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Heading = () => {
    const stars = Array(5).fill(null);
    return (
        <div className='flex justify-between'>
            <div>
                <div className='text-6xl font-anton font-bold'>
                    REVIEWS
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='text-3xl font-anton font-bold'>
                        5.0
                    </div>
                    <div className='flex-wrap'>
                        <div className='flex items-center'>
                            {stars.map((_, index) => (
                                <div key={index} className='text-yellow'>
                                    <FaStar />
                                </div>
                            ))} 
                        </div>
                        <div className='text-slate-400 text-xs'>1,289 reviews</div>
                    </div>
                </div>
            </div>
            <div className='flex items-end'>
                <div className='flex items-center gap-2 p-3 bg-blue-700 text-secondary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)] cursor-pointer'>
                    Write a review
                    <div className='hover:translate-x-2 hover:opacity-80 transition-transform cursor-pointer'>
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
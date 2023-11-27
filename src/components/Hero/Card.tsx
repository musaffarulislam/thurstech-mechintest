import React from 'react'
import { FaStar, FaRegHeart } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io"; 
import { IoShareSocialOutline } from "react-icons/io5";

const Card: React.FC = () => {
  return (
    <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-12 bg-secondary border-2 border-primary rounded-lg p-8 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]'>
        <div className='sm:col-span-10'>
            <div className='flex gap-3 items-center'>
                <div className='text-yellow'>
                    <FaStar />
                </div>
                <div>
                    4.9 stars
                </div>
                <div className='text-slate-400'>
                    ( 231 Review )
                </div>
            </div>
            <div className='text-4xl font-anton font-extrabold my-4'>
                TSUKISHIMA MONJA STREET
            </div>
            <div>
                Users can easily find the perfect experiences to suit their interests. Users can easily find the perfect experience to suit their interests.
            </div>
            <div className='flex text-sm mt-4 gap-4'>
                <div className='flex items-center gap-1'>
                    <HiMapPin />
                    Texes, United States
                </div>
                <div className='flex items-center gap-1'>
                    <IoMdCall />
                    +91 9562 886 328
                </div>
            </div>
        </div>
        <div className=' sm:col-span-2  mt-4 md:m-0 '>
            <div className='flex gap-4 md:justify-end'>
                <div className='p-3 bg-background border-2 border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]'>
                    <FaRegHeart />
                </div>
                <div className='p-3 bg-background border-2 border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]'>
                    <IoShareSocialOutline />
                </div>
            </div>
            <div className='mt-4 sm:mt-8 flex md:justify-end'>
                October 4, 2021
            </div>
        </div>
    </div>
  )
}

export default Card
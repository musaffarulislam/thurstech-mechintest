import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const RightSide: React.FC = () => {
  return (
    <div className='flex gap-2 sm:gap-4 items-center'>
        <div className='cursor-pointer hover:opacity-80'>
            Start exploring
        </div>
        <div className='hover:translate-x-2 hover:opacity-80 transition-transform cursor-pointer'>
            <FaArrowRightLong />
        </div>
    </div>
  )
}

export default RightSide
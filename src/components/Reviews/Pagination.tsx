import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination: React.FC = () => {
    return (
        <div className='flex gap-2 justify-end'>
            <div className='p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-yellow cursor-pointer'>
                <IoIosArrowBack />
            </div>
            <div className='p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-yellow cursor-pointer'>
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default Pagination
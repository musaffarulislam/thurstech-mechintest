import React from 'react'
import LeftSide from '../components/Navbar/LeftSide'
import RightSide from '../components/Navbar/RightSide'

const Navbar = () => {
    return (
        <div className='h-10 m-2 md:m-5 md:mx-12 top-0 left-0 right-0 rounded-lg bg-primary text-secondary flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 fixed z-30'> 
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Navbar
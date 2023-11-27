import React from 'react'

const LeftSide: React.FC = () => {
  return (
    <div className='flex gap-2 sm:gap-6 md:gap-10 '>
        <div className='cursor-pointer hover:opacity-80'>
            Categories
        </div>
        <div className='cursor-pointer hover:opacity-80'>
            Activities Near Me
        </div> 
        <div className='cursor-pointer hover:opacity-80'>
            Add a Place
        </div>
    </div>
  )
}

export default LeftSide
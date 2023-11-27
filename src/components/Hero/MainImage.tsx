import React from 'react'

const MainImage = () => {
  return (
    <div className='relative'>
        <img src="https://images.pexels.com/photos/2481630/pexels-photo-2481630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="China" className=" w-full h-full rounded-lg object-cover " />
        <div className='absolute top-4 right-4 bg-yellow p-1 px-2 rounded-full text-xs font-bold'>
            Popular
        </div>
        <div className='absolute bottom-6 left-6 text-secondary font-anton font-extrabold text-3xl'>
            PLACE
        </div>
    </div>
  )
}

export default MainImage
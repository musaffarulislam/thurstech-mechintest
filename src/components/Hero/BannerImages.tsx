import React from 'react'
import MainImage from './MainImage'
import ImageLayout from './ImageLayout'

const BannerImages = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-7'>
            <MainImage />
        </div>
        <div  className='col-span-12 md:col-span-5'>
            <ImageLayout />
        </div>
    </div>
  )
}

export default BannerImages
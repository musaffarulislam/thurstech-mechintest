import React from 'react'
import BannerImages from '../components/Hero/BannerImages'
import Card from '../components/Hero/Card'

const Hero: React.FC = () => {
  return (
    <div className='mx-5 sm:mx-12 md:mx-20 lg:mx-36 mt-20'>
        <BannerImages />
        <Card />
    </div>
  )
}

export default Hero
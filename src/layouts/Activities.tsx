import React from 'react'
import Heading from '../components/Activities/Heading'
import Cards from '../components/Activities/Cards'

const Activities: React.FC = () => {
  return (
    <div  className='mx-5 sm:mx-12 md:mx-20 lg:mx-36 my-16'>
        <Heading />
        <Cards />
    </div>
  )
}

export default Activities
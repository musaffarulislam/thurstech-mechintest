import React from 'react'
import Heading from '../components/Reviews/Heading'
import Content from '../components/Reviews/Content'
import Pagination from '../components/Reviews/Pagination'

const Reviews = () => {
  return (
    <div className='mx-5 sm:mx-12 md:mx-20 lg:mx-36 my-16'>
        <Heading />
        <Content />
        <Pagination />
    </div>
  )
}

export default Reviews
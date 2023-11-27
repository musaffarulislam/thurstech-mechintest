import React from 'react'
import LeftOverview from '../components/Overview/LeftOverview'
import RightOverview from '../components/Overview/RightOverview'

const Overview = () => {
  return (
    <div className='mx-5 sm:mx-12 md:mx-20 lg:mx-36 my-12'>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
            <LeftOverview />
            <RightOverview />
        </div>
    </div>
  )
}

export default Overview
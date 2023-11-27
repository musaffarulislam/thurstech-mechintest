import React from 'react'
import Details from './Details'

const Content = () => {
  return (
    <div>
      <div className="w-full border-t border-gray-500 my-4"></div>
      <Details name='LAILA JOHN' place='MUMBAI' title='The best out there!' date='May 12, 2023' />
      <Details name='MATT DAMON' place='DELHI' title='A Must-Have for Event Enthisiasts!' date='May 12, 2023' />
      <Details name='MELLISA DUNBAR' place='BANGALORE' title='Local Events at Your Fingertips!' date='May 12, 2023' />
    </div>
  )
}

export default Content
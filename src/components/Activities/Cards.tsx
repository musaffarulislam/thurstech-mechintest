import React from 'react' 
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-16 my-12'>
        <Card popular={true} heading='Place' rating="4.9 stars" date="November 2, 2023" title="Tsukishima Monja Street" price="22.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card popular={false} heading='OUTDOOR ACTIVITIES' rating="5.0 stars" date="October 4, 2023" title="Sea Monkeys" price="51.00" location="Texus, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </div>
  )
}

export default Cards
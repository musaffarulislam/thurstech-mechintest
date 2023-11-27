import React from 'react'
import Links from '../components/Footer/Links'
import Copyright from '../components/Footer/Copyright' 

const Footer: React.FC = () => {
  return (
    <div className='pt-24 bg-primary text-secondary'>
        <Links />
        <Copyright /> 
    </div>
  )
}

export default Footer
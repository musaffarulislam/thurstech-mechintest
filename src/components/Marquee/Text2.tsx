import React from 'react'

interface Text2Props {
    text: string;

}
const Text2: React.FC<Text2Props>  = ({text}) => {
  return (
    <div className='mx-24 sm:mx-36 md:mx-48 p-2 px-4 bg-primary text-secondary rounded-full'>{text}</div>
  )
}

export default Text2
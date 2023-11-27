import React from 'react'

interface Text1Props {
    text: string;

}
const Text1: React.FC<Text1Props> = ({text}) => {
  return (
    <div className='text-2xl font-bold'>{text}</div>
  )
}

export default Text1
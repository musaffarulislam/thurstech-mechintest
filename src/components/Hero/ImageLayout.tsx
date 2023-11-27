import React from 'react'

const ImageLayout: React.FC = () => {
  return (
    <div className='h-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4'>
        <div>
            <img src="https://images.pexels.com/photos/2845890/pexels-photo-2845890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image1" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/18781943/pexels-photo-18781943/free-photo-of-footbridge-over-shantang-river-in-suzhou-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image3" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/879359/pexels-photo-879359.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image4" className="w-full h-full object-cover rounded-lg" />
        </div>
    </div>
  )
}

export default ImageLayout
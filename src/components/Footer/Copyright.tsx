import React from 'react'

const Copyright: React.FC = () => {
  return (
    <div className="mt-24 mx-5 sm:mx-12 md:mx-20 lg:mx-36 opacity-50 pb-0 lg:pb-36 relative overflow-hidden">
        <div className="flex justify-between ">
            <div>
                All rights reserved by littlemoments.in
            </div>
            <div>Back to top</div>
        </div>
        <div className="hidden lg:block ">
            <div className="absolute md:text-4xl lg:text-9xl font-extrabold -bottom-10 flex left-16 opacity-60">LITTLE MOMENTS</div>
        </div>
    </div>
  )
}

export default Copyright
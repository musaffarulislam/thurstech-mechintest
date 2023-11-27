import React from 'react'

const Links: React.FC = () => {
    return (
        <div className='mx-5 sm:mx-12 md:mx-20 lg:mx-36 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div className="flex justify-center">
                <div>       
                    <div className='text-4xl font-anton font-bold mb-8'>
                        WEBSITE
                    </div>
                    <div className='grid grid-cols-1 gap-4 text-xs'>
                        <div className="cursor-pointer hover:opacity-80">Categories</div>
                        <div className="cursor-pointer hover:opacity-80">Activities Near me</div>
                        <div className="cursor-pointer hover:opacity-80">Add a Place</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className='text-4xl font-anton font-bold mb-8'>
                        IMPORTANT
                    </div>
                    <div className='grid grid-cols-1 gap-4 text-xs'>
                        <div className="cursor-pointer hover:opacity-80">Terms & Condition</div>
                        <div className="cursor-pointer hover:opacity-80">Privacy Policy</div>
                        <div className="cursor-pointer hover:opacity-80">Terms of Usage</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className='text-4xl font-anton font-bold mb-8'>
                        CONTACT
                    </div>
                    <div className='grid grid-cols-1 gap-4 text-xs'>
                        <div className="cursor-pointer hover:opacity-80">Mumbai, India</div>
                        <div className="cursor-pointer hover:opacity-80">+91 9562 886 328</div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links
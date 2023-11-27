import React from 'react'

const Links = () => {
    return (
        <div className='mx-24 grid grid-cols-1 sm:grid-cols-3'>
            <div>
                <div className='text-4xl font-anton font-bold mb-8'>
                    WEBSITE
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                    <div className="cursor-pointer hover:opacity-80">Activities Near me</div>
                    <div className="cursor-pointer hover:opacity-80">Add a Place</div>
                </div>
            </div>
            <div>
                <div className='text-4xl font-anton font-bold mb-8'>
                    IMPORTANT
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                </div>
            </div>
            <div>
                <div className='text-4xl font-anton font-bold mb-8'>
                    WEBSITE
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                    <div className="cursor-pointer hover:opacity-80">Categories</div>
                </div>
            </div>
        </div>
    )
}

export default Links
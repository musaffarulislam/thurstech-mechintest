import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const LeftOverview: React.FC = () => {
    const [overView, setOverView] = useState<boolean>(false)
    const [features, setFeatures] = useState<boolean>(false)
    const [video, setVideo] = useState<boolean>(false)

    const handleOverview = () =>{
        setOverView(!overView)
    }
    const handleFeatures = () =>{
        setFeatures(!features)
    }
    const handleVideo = () =>{
        setVideo(!video)
    }
    return (
        <div className='sm:col-span-8'>
            <div>
                <div className='flex w-full justify-between'>
                    <div className='text-2xl font-anton'>
                        OVERVIEW
                    </div>
                    <div className='text-xl cursor-pointer' onClick={handleOverview}>
                        <FaCirclePlus />
                    </div>
                </div>
                <div className={`${overView ? "block" : "hidden"}`}>
                    <div className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea autem iure, et facere quae quos asperiores non esse corrupti eius praesentium, sunt aspernatur magni? Id, veniam. Nisi minima, qui molestiae impedit placeat maxime quae deleniti harum sequi est porro laudantium et. Dolore quaerat sequi laborum doloribus animi possimus doloremque.</div>
                </div>
                <div className="w-full border-t border-gray-500 my-4"></div>
            </div>
            <div>
                <div className='flex w-full justify-between'>
                    <div className='text-2xl font-anton'>
                        FEATURES
                    </div>
                    <div className='text-xl cursor-pointer' onClick={handleFeatures}>
                        <FaCirclePlus />
                    </div>
                </div>
                <div className={`${features ? "block" : "hidden"}`}>
                    <div className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea autem iure, et facere quae quos asperiores non esse corrupti eius praesentium, sunt aspernatur magni? Id, veniam. Nisi minima, qui molestiae impedit placeat maxime quae deleniti harum sequi est porro laudantium et. Dolore quaerat sequi laborum doloribus animi possimus doloremque.</div>
                </div>
                <div className="w-full border-t border-gray-500 my-4"></div>
            </div>
            <div>
                <div className='flex w-full justify-between'>
                    <div className='text-2xl font-anton'>
                        LISTING VIDEOS
                    </div>
                    <div className='text-xl cursor-pointer' onClick={handleVideo}>
                        <FaCirclePlus />
                    </div>
                </div>
                <div className={`${video ? "block" : "hidden"}`}>
                    <div className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea autem iure, et facere quae quos asperiores non esse corrupti eius praesentium, sunt aspernatur magni? Id, veniam. Nisi minima, qui molestiae impedit placeat maxime quae deleniti harum sequi est porro laudantium et. Dolore quaerat sequi laborum doloribus animi possimus doloremque.</div>
                </div>
                <div className="w-full border-t border-gray-500 my-4"></div>
            </div>
        </div>
    )
}

export default LeftOverview
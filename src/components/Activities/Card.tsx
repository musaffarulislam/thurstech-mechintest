import React from 'react'
import { FaStar } from "react-icons/fa";
import { HiMapPin } from 'react-icons/hi2';
import { IoMdCall } from 'react-icons/io';

interface CardProps {
    popular: boolean;
    heading: string;
    rating: string;
    date: string;
    title: string;
    price: string;
    location: string;
    phone: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ popular, heading, rating, date, title, price, location, phone, image }) => {
    return (
        <div className='rounded-lg bg-secondary border-2 border-primary drop-shadow-[10px_10px_0_rgba(0,0,0,1)]'>
            <div className='w-full h-[250px] rounded-lg relative'>
                <img src={image} alt="image2" className="w-full h-full object-cover rounded-lg" />
                {
                    popular && (
                        <div className='absolute top-4 right-4 bg-yellow p-1 px-2 rounded-full text-xs font-bold'>
                            Popular
                        </div>
                    )
                }
                <div className='absolute bottom-6 left-6 text-secondary font-anton font-extrabold text-2xl'>
                    {heading}
                </div>
            </div>
            <div className='p-3 text-xs'>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='text-yellow'>
                            <FaStar />
                        </div>
                        <div>
                            {rating}
                        </div>
                    </div>
                    <div>{date}</div>
                </div>
                <div className='my-3 font-bold'>
                    {title}
                </div>
                <div className='font-bold'>
                    ${price}
                </div>
                <div className='mt-4 font-semibold'>
                    <div className='flex items-center gap-1'>
                        <HiMapPin />
                        Texes, United States
                    </div>
                    <div className='flex items-center gap-1 mt-2'>
                        <IoMdCall />
                        +91 9562 886 328
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
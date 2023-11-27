import React from 'react'
import { FaStar } from "react-icons/fa";

interface DetailsProps {
    name: string;
    place: string;
    title: string;
    date: string;
}

const Details:React.FC<DetailsProps> = ({name, place, title, date}) => {
    const stars = Array(5).fill(null);
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-12 py-3'>
                <div className='sm:col-span-3'>
                    <div>{name}</div>
                    <div className='text-xs text-slate-400'>{place}</div>
                </div>
                <div className='sm:col-span-6'>
                    <div className='flex gap-3 items-center'>
                        <div className='flex'>
                            {stars.map((_, index) => (
                                <div key={index} className='text-primary'>
                                    <FaStar />
                                </div>
                            ))}
                        </div>
                        <div className='text-xl font-bold'>
                            {title}
                        </div>
                    </div>
                    <div className='my-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dignissimos magni fugit laboriosam nesciunt iure in maiores labore dolorem earum tenetur qui veniam, quae eveniet reiciendis accusantium eius suscipit! Dolorem, totam debitis laborum laboriosam et, incidunt reiciendis unde est voluptatibus explicabo magni doloremque quo facilis tempore cumque aperiam rerum. Numquam!
                    </div>
                </div>
                <div className='sm:col-span-3 relative'>
                    <div className='absolute sm:top-0 sm:right-0 font-bold'>{date}</div>
                </div>
            </div>
            <div className="w-full border-t border-gray-500 my-4"></div>
        </div>
    )
}

export default Details
import Image from 'next/image';
import React from 'react';
import qoute from '../../assets/reveiw/quote.png'
import backQuote from '../../assets/reveiw/backQuote.png'

const ServiceReviewItem = ({ name, img, desc, title }) => {
    return (
        <div className='mx-auto cursor-pointer select-none flex  p-5 rounded-xl '>
            <div>
                <Image
                    src={qoute}
                    alt="qoute"
                    width={200}
                    height={200}
                />
            </div>
            <div className="h-full ml-4 mt-6">
                <div className="flex gap-4 items-center ">
                    <Image
                        alt="testimonial"
                        src={img}
                        height={50}
                        width={50}
                        className='rounded-xl'
                    />

                    <div className="">
                        <h1 className="text-start font-bold text-black text-xl">{name}</h1>
                        <p className="text-gray-500 text-start text-sm">{title}</p>
                    </div>
                </div>

                <p className='text-gray-500 text-sm mt-3 text-justify'>{desc}</p>

                <div className="rating rating-sm mt-3">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div className='flex items-end'>
                <Image
                    src={backQuote}
                    alt="qoute"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
};

export default ServiceReviewItem;
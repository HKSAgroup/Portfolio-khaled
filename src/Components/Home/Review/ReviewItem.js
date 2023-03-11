import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import qoute from '../../../assets/reveiw/backQuote.png'

const ReviewItem = ({ name, img, desc, title }) => {
    return (
        <motion.div
            className=" mx-auto  rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <div className='mx-auto shadow-md cursor-pointer select-none flex flex-col justify-end p-5  person1 rounded-xl '>
                <div className="h-full text-center">
                    <div className='flex justify-between items-center mb-3'>
                        <div className="flex items-center ">
                            <Image
                                alt="testimonial"
                                className="w-14 h-14 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mr-2"
                                src={img}
                                height={150}
                                width={150}
                            />

                            <div className="">
                                <h1 className="text-start font-bold text-black ">{name}</h1>
                                <p className="text-gray-500 mb-3 text-start text-sm">{title}</p>
                            </div>
                        </div>

                        <div>
                            <Image
                                alt="testimonial"
                                src={qoute}
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>

                    <i className='text-gray-500 text-sm text-justify '>{desc}</i>
                    {/* <span className="inline-block h-1 w-16 rounded bg-orange-500 mt-6 mb-4"></span> */}
                    {/* <LineGradient width="w-1/4 h-[2px] rounded-xl mx-auto mt-6 sm:mb-10 mb-3" /> */}
                </div>
            </div>
        </motion.div>
    );
};

export default ReviewItem;
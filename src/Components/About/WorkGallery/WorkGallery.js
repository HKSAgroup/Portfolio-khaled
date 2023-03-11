import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import angel from '../../../assets/About/Rectangle 143.png'

const WorkGallery = () => {
    return (
        <div className='mid-container'>
            <div className='md:flex justify-between items-center'>
                <div>
                    <p className='text-primary tracking-widest mb-1'>PORTFOLIO</p>
                    <h1 className='md:text-3xl text-2xl font-bold'>Our Work Gallery</h1>
                </div>
                <div className='sm:flex justify-between gap-6 mt-5 md:mt-0'>
                    <div className='flex gap-5 font-medium items-center'>
                        <h1 className='cursor-pointer text-primary hover:text-primary duration-300'>All</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Design</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Development</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Marketing</h1>
                    </div>
                    <div className='flex gap-3 mt-5 sm:mt-0'>
                        <div className='h-8 w-8 hover:bg-primary rounded-full flex justify-center items-center hover:text-white duration-200 cursor-pointer  border border-primary'>
                            <BsArrowLeftShort className='font-bold text-xl' />
                        </div>
                        <div className='h-8 w-8 hover:bg-primary rounded-full flex justify-center items-center hover:text-white duration-200 cursor-pointer border border-primary'>
                            <BsArrowRightShort className='font-bold text-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5 mt-10'>
                <div>
                    <Image
                        src={angel}
                        alt="image"
                        width={500}
                        height={500}
                        className='mb-5 w-full'
                    />
                    <div className='grid grid-cols-2 gap-5'>
                        <Image
                            src={angel}
                            alt="image"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={angel}
                            alt="image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        <Image
                            src={angel}
                            alt="image"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={angel}
                            alt="image"
                            width={500}
                            height={500}
                        />
                    </div>
                    <Image
                        src={angel}
                        alt="image"
                        width={500}
                        height={500}
                        className='mt-5 w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkGallery;
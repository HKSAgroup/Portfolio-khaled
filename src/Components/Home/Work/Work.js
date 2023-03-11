import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import mask from '../../../assets/work/mask.png'

const Work = () => {
    return (
        <div className='mid-container'>
            <div className='mt-28 md:flex justify-center items-center gap-16'>
                <div className='md:w-[50%]'>
                    <p className='text-primary'>WORK</p>
                    <h1 className='text-3xl font-bold mt-2 mb-3'>Check it <br /> Our last work for clients</h1>
                    <p className='text-sm text-neutral'>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum text ever has been the industry's standard.</p>

                    <p className='flex items-center mb-10 mt-5 font-medium cursor-pointer gap-2 text-primary text-sm '>LEARN MORE <BsArrowRight /></p>

                    <div className='flex gap-3'>
                        <div className='h-8 w-8 hover:bg-primary rounded-full flex justify-center items-center hover:text-white duration-200 cursor-pointer  border border-primary'>
                            <BsArrowLeftShort className='font-bold text-xl' />
                        </div>
                        <div className='h-8 w-8 hover:bg-primary rounded-full flex justify-center items-center hover:text-white duration-200 cursor-pointer border border-primary'>
                            <BsArrowRightShort className='font-bold text-xl' />
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] mt-5 md:mt-0'>
                    <Image
                    src={mask}
                    alt="image"
                    width={500}
                    height={500}
                    className='mx-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default Work;
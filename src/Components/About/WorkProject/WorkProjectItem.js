import Image from 'next/image';
import React from 'react';
import img from '../../../assets/About/Rectangle 143.png'

const WorkProjectItem = () => {
    return (
        <div className='relative '>

            <div className='h-12 w-12 p-2 bg-primary flex justify-center items-center  rounded absolute -mt-6 ml-60'>
                <p className='text-4xl font-bold text-white'>1</p>
            </div>
            <Image
                src={img}
                alt="image"
                width={500}
                height={500}
                className='w-full'
            />

            <div className='mt-3 pr-3'>
                <div className='flex justify-between items-center border-l-4 pl-4 border-primary '>
                    <h1 className='font-medium'>Business Name</h1>
                    <p className='text-sm text-neutral'>20/07/199</p>
                </div>
                <p className='pl-4 mt-2 text-sm text-neutral leading-6'>Event madness we take are gathering  innovatEvent madness  on gathering innovators. <br/> It’s the freas bake <span className='text-primary'>more</span></p>
            </div>
        </div>
    );
};

export default WorkProjectItem;
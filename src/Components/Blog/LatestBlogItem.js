import React from 'react';
import Image from 'next/image';
import img from '../../assets/blog/details.png'
import { useRouter } from 'next/router';

const LatestBlogItem = () => {
    const router = useRouter()
    return (
        <div 
        onClick={() => router.push('/blog/[id]')}
        className='flex justify-center items-center gap-4'>
            <div className='w-[50%]'>
                <Image
                    src={img}
                    alt='img'
                    width={600}
                    height={400}
                    className='cursor-pointer'
                />
            </div>
            <div className='w-[50%]'>
                <p className='text-xs text-neutral'>23 March 2020 </p>
                <h1 className='font-medium mt-2 cursor-pointer hover:text-primary duration-200'>29 December 2021 baking news of title....</h1>
                <p className='text-primary text-xs mt-2 cursor-pointer'>READ ARTICLE</p>
            </div>
        </div>
    );
};

export default LatestBlogItem;
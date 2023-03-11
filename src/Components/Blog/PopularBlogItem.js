import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import img from '../../assets/blog/details.png'

const PopularBlogItem = () => {
    const router = useRouter()
    return (
        <div
        onClick={() => router.push('/blog/[id]')}>
        <Image
            src={img}
            alt='video'
            width={600}
            height={400}
            className='w-full cursor-pointer'
        />
        <h1 className='text-xl font-medium cursor-pointer hover:text-primary mt-3 px-2'>Success Steps For Your Business Life</h1>
        <p className='text-neutral mt-2 text-sm px-2'>Lorem Ipsum is simply on the dummy text of the printing of and typesetting industry. Lorem Ipsum has been scene the  industry's standard
            most of most the colture...</p>
    </div>
    );
};

export default PopularBlogItem;
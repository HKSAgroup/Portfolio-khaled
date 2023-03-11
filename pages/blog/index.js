import React from 'react';
import video from '../../src/assets/blog/video.png'
import mask from '../../src/assets/blog/maskGroup.png'
import Image from 'next/image';
import LatestBlogItem from '../../src/Components/Blog/LatestBlogItem';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter()
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-4xl font-bold text-center mb-1'>Blog</h1>
                        <p className='text-neutral text-sm text-center'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
                    </div>
                </div>
            </div>

            <div className='mid-container'>
                <div className='flex justify-between mt-20'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl  font-medium'>Our Latest Blog</h1>

                    <h1 className='border border-primary rounded-full px-4 py-2 flex justify-center items-center text-sm hover:bg-primary hover:text-white duration-200 cursor-pointer'>Read All Blogs </h1>
                </div>
                <div className='mt-5 md:grid grid-cols-2 gap-5'>
                    <div
                        onClick={() => router.push('/blog/[id]', '/blog/1')}>
                        <Image
                            src={video}
                            alt='video'
                            width={600}
                            height={400}
                            className='w-full cursor-pointer'
                        />
                        <h1 className='text-xl font-medium cursor-pointer hover:text-primary mt-3 px-2'>Success Steps For Your Business Life</h1>
                        <p className='text-neutral mt-2 text-sm px-2'>Lorem Ipsum is simply on the dummy text of the printing of and typesetting industry. Lorem Ipsum has been scene the  industry's standard
                            most of most the colture...</p>
                    </div>
                    <div className='space-y-4 mt-7 md:mt-0'>
                        <LatestBlogItem />
                        <LatestBlogItem />
                        <LatestBlogItem />
                    </div>
                </div>
            </div>

            <div className='mid-container'>
                <div className='flex justify-between mt-20'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium'>The previous month blog</h1>

                    <h1 className='border border-primary rounded-full px-4 py-2 flex justify-center items-center text-sm hover:bg-primary hover:text-white duration-200 cursor-pointer'>Read All Blogs </h1>
                </div>
                <div className='mt-5 md:grid grid-cols-2 gap-5'>
                    <div className='space-y-4 mt-7 md:mt-0'>
                        <LatestBlogItem />
                        <LatestBlogItem />
                        <LatestBlogItem />
                    </div>
                    <div  onClick={() => router.push('/blog/[id]', '/blog/1')}>
                        <Image
                            src={video}
                            alt='video'
                            width={600}
                            height={400}
                            className='w-full cursor-pointer'
                        />

                        <h1 className='text-xl font-medium mt-3 px-2 cursor-pointer hover:text-primary'>Success Steps For Your Business Life</h1>
                        <p className='text-neutral mt-2 text-sm px-2'>Lorem Ipsum is simply on the dummy text of the printing of and typesetting industry. Lorem Ipsum has been scene the  industry's standard
                            most of most the colture...</p>
                    </div>
                </div>
            </div>

            <div className='mid-container'>
                <div className='flex justify-between mt-20'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium'>Our Popular Blog</h1>

                    <h1 className='border border-primary rounded-full px-4 py-2 flex justify-center items-center text-sm hover:bg-primary hover:text-white duration-200 cursor-pointer'>Read All Blogs </h1>
                </div>
                <div className='mt-5 md:grid grid-cols-2 gap-5'>
                    <div  onClick={() => router.push('/blog/[id]', '/blog/1')}>
                        <Image
                            src={video}
                            alt='video'
                            width={600}
                            height={400}
                            className='w-full cursor-pointer'
                        />
                        <h1 className='text-xl font-medium mt-3 px-2 cursor-pointer hover:text-primary'>Success Steps For Your Business Life</h1>
                        <p className='text-neutral mt-2 text-sm px-2'>Lorem Ipsum is simply on the dummy text of the printing of and typesetting industry. Lorem Ipsum has been scene the  industry's standard
                            most of most the colture...</p>
                    </div>
                    <div className='space-y-4 mt-7 md:mt-0'>
                        <LatestBlogItem />
                        <LatestBlogItem />
                        <LatestBlogItem />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
import Image from 'next/image';
import React from 'react';
import img from '../../src/assets/blog/details.png'
import PopularBlogItem from '../../src/Components/Blog/PopularBlogItem';

const BlogDetails = () => {
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-4xl font-bold text-center mb-1'>29 December 2021 baking <br /> news of title....</h1>
                    </div>
                </div>
            </div>
            <div className='mid-container'>
                <Image
                    src={img}
                    alt='img'
                    width={1200}
                    height={800}
                    className='w-full'
                />

                <div className='flex justify-between items-center mt-3'>
                    <h1 className='text-2xl  font-medium'>29 December 2021 baking <br /> news of title....</h1>
                    <p className='text-sm text-neutral'>23 March 2020</p>
                </div>

                <p className='text-neutral text-sm mt-4'>I want to be a world-class Full stack web developer. I want to learn more type of work. Daily I spend 15 hours in Online. Because life is a learning way. Every step knows to learn. I like connecting with engineer, Business development person, and IT professionals person. loved to help people finding the <br /><br />

                    right path. I am a fully business minded person. I like to develop a new start-up business. If you want to create a new business, I help you Convert your business development in the proper way. <br /><br />
                    ,  WordPress Website (from scratch) ,  Magento Website (from scratch)  ,  Opencart Website (From Scratch) ,  laravel Website (From Scratch)
                    ,  Node JS Website (From Scratch) ,  Python Website (From Scratch) ,  Java Website (From Scratch) ,  iOS App development ,  Android App development ,  UI/UX design for Web & Mobile Apps ,  Facebook Marketing ,  Google Ads ,  Email Marketing  , Web Scraping ,  Data Entry ,  B2B Lead Generation ,  WordPress Website (from scratch) ,  Magento Website (from scratch) ,  Opencart Website (From Scratch) ,  laravel Website (From Scratch) ,  Node JS Website (From Scratch) ,  Python Website (From Scratch) ,  Java Website (From Scratch) ,  iOS App development ,  Android App development ,  UI/UX design for Web & Mobile Apps ,  Facebook Marketing ,  Google Ads ,  Email Marketing , Web Scraping ,  Data Entry ,  B2B Lead Generation. ,  WordPress Website (from scratch) ,  Magento Website (from scratch)  ,  Opencart Website (From Scratch) ,  laravel Website (From Scratch) ,  Node JS Website (From Scratch) ,  Python Website (From Scratch) ,  Java Website (From Scratch) ,  iOS App development ,  Android App development ,  UI/UX design for Web & Mobile Apps ,  Facebook Marketing ,  Google Ads ,  Email Marketing  , Web Scraping ,  Data Entry ,  B2B Lead Generation.</p>
            </div>

            <div className='mid-container'>
                <h1 className='text-2xl font-medium mt-20 mb-5'>Popular Blogs</h1>

                <div className='grid md:grid-cols-3 gap-5'>
                    <PopularBlogItem/>
                    <PopularBlogItem/>
                    <PopularBlogItem/>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
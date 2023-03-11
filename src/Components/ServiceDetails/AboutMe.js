import Image from 'next/image';
import React from 'react';
import khaled from '../../assets/About/khaled.png'
import { AiOutlineDoubleRight } from 'react-icons/ai';

const AboutMe = () => {
    return (
        <div className='mt-28'>

            <h1 className='text-3xl font-medium'>About Me</h1>

            <div className= 'flex items-center gap-5 mt-8'>
                <Image
                    src={khaled}
                    alt="khaled"
                    width={100}
                    height={100}
                    className='rounded-3xl'
                />
                <div>
                    <h1 className="font-medium text-xl">Khaled Ahmed</h1>
                    <p className="text-neutral text-sm">Designer, Developer, & Markrter</p>
                    <div className='flex items-center mt-3 gap-2 text-sm'>
                        <div className="rating rating-sm mb-1">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>4.5 (4.5 - 8.6k)</p>
                    </div>
                </div>
            </div>

            <p className='mt-5 text-sm text-neutral'>
                I want to be a world-class Full stack web developer. I want to learn more type of work. Daily I spend 15 hours in Online. Because life is a learning way. Every step knows to learn. I like connecting with engineer, Business development person, and IT professionals person. loved to help people finding the right path. <br /> <br />
                I am a fully business minded person. I like to develop a new start-up business. If you want to create a new business, I help you Convert your business development in the proper way.

                <br /> <br />
                <span className='font-bold'>   The things I do:</span>
                <br /> <br />
                I can provide you Following services      </p>

            <div className='text-sm mt-5 grid grid-cols-2 gap-5'>
                <div className='space-y-3'>
                    <span className='flex items-center text-neutral gap-1 '> <AiOutlineDoubleRight /> WordPress Website (from scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight /> Magento Website (from scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Opencart Website (From Scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />laravel Website (From Scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight /> Node JS Website (From Scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Python Website (From Scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Java Website (From Scratch)</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />iOS App development</span>
                </div>
                <div className='space-y-3'>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Android App development</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />UI/UX design for Web & Mobile Apps</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Facebook Marketing</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Google Ads</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Email Marketing</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Web Scraping</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />Data Entry</span>
                    <span className='flex items-center text-neutral gap-1'> <AiOutlineDoubleRight />B2B Lead Generation</span>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;
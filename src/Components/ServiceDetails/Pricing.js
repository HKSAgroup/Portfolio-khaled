import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Pricing = () => {
    const router = useRouter();
    return (
        <div className='mt-28 md:flex items-center gap-20'>
            <div className='md:w-[60%]'>
                <h1 className='text-3xl font-medium mb-3'>About this project</h1>
                <p className='text-neutral text-sm text-justify'>We are here to help you communicate your business idea with the design language of the future, The Minimalist Logo Design. <br /> <br />

                    It has become a want, to convey the idea directly on the face without any distraction of unwanted design elements, hence leaving zero confusion in understanding the brand image for the end-user (the potential customer). <br /> <br />

                    We strive for two things in design, simplicity, and clarity. And great design is always born of these two. <br /> <br /><br /> <br />

                    <span className='font-medium text-info'>The benefits to reap from this project:</span><br /> <br />

                    Over thousands of satisfied brands/clients worldwide
                    Dedicated & Qualified Designers with 10+ years of experience.
                    Fluent English Speaker to leave zero communication gap in understanding your original idea.<br /> <br />
                    24/7 support, I literally spend my life here at Fiverr for your support.
                    Original concepts based on your instructions.<br /> <br />
                    Unlimited Revisions until your satisfaction depending upon the package you purchase.</p>
            </div>

            <div className='md:w-[40%] mt-10 md:mt-0'>
                <div className='grid grid-cols-3 border'>
                    <div className='flex justify-center items-center py-2 bg-[#F6F6F6] border-r cursor-pointer'>
                        <h1 className=' font-medium '>Basic</h1>
                    </div>
                    <div className='flex justify-center items-center py-2 bg-primary border-r cursor-pointer'>
                        <h1 className=' font-medium text-white'>Standard</h1>
                    </div>
                    <div className='flex justify-center items-center py-2 bg-[#F6F6F6] cursor-pointer'>
                        <h1 className=' font-medium '>Premium</h1>
                    </div>
                </div>

                <div className='flex justify-between my-7'>
                    <h1 className='text-xl font-medium'>Agency Website</h1>
                    <h1 className='text-primary font-medium'>30$</h1>
                </div>

                <div className='text-neutral'>
                    <p className='text-sm'>Below is what you will get when you buy it. Please read the article...</p>

                    <div className='mt-5 space-y-3'>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages design.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages design.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> Figma file the work is total 22 pages.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages design.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages.</p>
                        <p className='flex items-center gap-2 text-sm '><BsArrowUpRightCircle className='text-primary' /> The work is total 22 pages.</p>
                    </div>
                </div>

                <div className='flex gap-4 mt-7'>
                    <button
                        onClick={() => router.push('/payment')}
                        className='btn btn-primary w-[40%] btn-md text-white'>Buy Now</button>
                    <div className=' w-[60%] font-bold btn-md border border-primary hover:text-white duration-200 py-2 flex justify-center items-center cursor-pointer hover:bg-primary rounded-md uppercase text-primary'>Or Contact Me</div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
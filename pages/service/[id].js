import React from 'react';
import ImageGallery from 'react-image-gallery';
import { FaShoppingCart } from 'react-icons/fa';
import Pricing from '../../src/Components/ServiceDetails/Pricing';
import ServiceReview from '../../src/Components/ServiceDetails/ServiceReview';
import AboutMe from '../../src/Components/ServiceDetails/AboutMe';
import LatestProject from '../../src/Components/ServiceDetails/LatestProject';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

const ServiceDetails = () => {
    const router = useRouter();

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <div className='mid-container'>

            <h1 
            onClick={() => router.back()}
            className='mt-5 cursor-pointer flex items-center gap-2 text-warning text-xl font-medium'> <BiArrowBack/> Back</h1>
            <div className='md:flex items-center gap-20 mt-10'>
                <div className='md:w-[60%]'>
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        // showFullscreenButton={false}
                        showNav={false}
                    // showBullets={true}
                    // showThumbnails={false}


                    />
                </div>
                <div className='bg-[#262D32] p-8 text-white md:w-[40%] mt-10 md:mt-0'>
                    <h2 className='text-xl  font-medium mb-6'>Additional Options</h2>

                    <div className='grid gap-5'>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Google Ads (Trading)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3  font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Google Ads (Trading)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Google Ads (Trading)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Google Ads (Trading)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Facebook Targeting (Leads)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Facebook Targeting (Leads)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Facebook Targeting (Leads)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                            <div className='w-[60%]'>
                                <h2>Facebook Targeting (Leads)</h2>
                            </div>
                            <div className='flex justify-between items-center w-[40%]'>
                                <div className='bg-[#414141] h-3 w-3 p-3   font-medium flex justify-center items-center text-white rounded-full'>
                                    <h3>?</h3>
                                </div>
                                <h2>$305</h2>
                                <FaShoppingCart className='text-primary' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pricing />
            <ServiceReview />
            <AboutMe />
            <LatestProject />
        </div>
    );
};

export default ServiceDetails;
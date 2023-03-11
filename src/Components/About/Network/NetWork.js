import React from 'react';
import bd from '../../../assets/About/bd.png'
import america from '../../../assets/About/america.png'
import australia from '../../../assets/About/australia.png'
import china from '../../../assets/About/china.png'
import map from '../../../assets/About/map.png'
import Image from 'next/image';

const NetWork = () => {
    return (
        <div className='mid-container'>
            <div className='mt-20 flex justify-between items-center'>
                <div>
                    <h1 className='md:text-3xl text-2xl font-bold'>My Network <br /> & World Work Details </h1>
                </div>
                <div className='border border-primary px-4 py-2 flex justify-center items-center text-sm rounded cursor-pointer hover:bg-primary hover:text-white duration-200'>
                    <p>SEE ALL</p>
                </div>
            </div>


            <div className='mt-10 md:flex justify-between items-center gap-10'>
                <div className=' md:w-[40%] lg:w-[30%] grid md:grid-cols-1 grid-cols-2  gap-8 mb-10 md:mb-0'>
                    <div className='flex gap-4'>
                        <div className='shadow rounded-full h-14 w-14 flex justify-center items-center p-2'>
                            <Image
                                src={bd}
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Bangladesh</h1>
                            <p className='text-sm text-neutral'>Event madness gathering innoies, <br /> & tech enthusiasts in Speced.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='shadow rounded-full h-14 w-14 flex justify-center items-center p-2'>
                            <Image
                                src={america}
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>America (U S A)</h1>
                            <p className='text-sm text-neutral'>Event madness gathering innoies, <br /> & tech enthusiasts in Speced.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='shadow rounded-full h-14 w-14 flex justify-center items-center p-2'>
                            <Image
                                src={australia}
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Australia</h1>
                            <p className='text-sm text-neutral'>Event madness gathering innoies, <br /> & tech enthusiasts in Speced.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='shadow rounded-full h-14 w-14 flex justify-center items-center p-2'>
                            <Image
                                src={china}
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Chin</h1>
                            <p className='text-sm text-neutral'>Event madness gathering innoies, <br /> & tech enthusiasts in Speced.</p>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer md:w-[60%] lg:w-[70%]'>
                    <Image
                        src={map}
                        alt="image"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default NetWork;
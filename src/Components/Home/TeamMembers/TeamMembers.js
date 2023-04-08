import Image from 'next/image';
import React from 'react';
import img from '../../../assets/images/artist-white 2.png'

const TeamMembers = () => {
    return (
        <div className='mid-container'>
            <div className='mt-24 mb-16 text-center'>
                <h1 className='text-3xl text-center font-medium'>Our Team Members</h1>
                <p className='text-center text-neutral mt-1 text-sm'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10'>
                <div className='text-center'>
                     <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Topu</h1>
                    <p>JavaScript Developer</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Waliul</h1>
                    <p>Python Developer</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Arif</h1>
                    <p>Business Development Manager</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Sabib</h1>
                    <p>Communication Manager</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Hridoy</h1>
                    <p>Chief Engineer</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium mt-2'>Noman</h1>
                    <p>Designer</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
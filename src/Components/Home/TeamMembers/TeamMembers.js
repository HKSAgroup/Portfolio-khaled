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
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
                <div className='text-center'>
                    <Image
                        src={img}
                        alt="image"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    />
                    <h1 className='text-2xl font-medium'>Mr. Jone Smith</h1>
                    <p>Ui/Ux Designer</p>
                    <p className='text-sm text-neutral'>revitions a videos and the images. <br/>
                        more revitions</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
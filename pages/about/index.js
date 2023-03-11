import Image from 'next/image';
import React from 'react';
import img from '../../src/assets/About/image.png'
import mark from '../../src/assets/About/mark.png'
import Faq from '../../src/Components/About/FAQ/Faq';
import NetWork from '../../src/Components/About/Network/NetWork';
import WorkGallery from '../../src/Components/About/WorkGallery/WorkGallery';
import WorkProject from '../../src/Components/About/WorkProject/WorkProject';
import '../../styles/about.module.css'

const index = () => {
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-4xl font-bold text-center mb-1'>About Us</h1>
                        <p className='text-neutral text-sm text-center'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
                    </div>
                </div>
            </div>
            <div className='mid-container'>
                <div className='md:flex justify-center items-center gap-20 mt-20'>
                   <div className='md:w-[50%]'>
                   <Image
                        src={img}
                        alt="image"
                        width={500}
                        height={500}
                        className='mx-auto'
                    />
                   </div>

                    <div className='mt-10 md:mt-0 md:w-[50%]'>
                        <p className='text-primary mb-2'>ABOUT US</p>
                        <h1 className='md:text-3xl text-2xl font-extrabold mb-1 leading-10'>Learn about us <br /> & contact me for your work</h1>
                        <p className='text-neutral text-sm mt-3 leading-8 text-justify'>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer the took a galley ofthe industry's standard dummy text ever since  type and scrambled. 1500s, when an unknown printer the took a galley ofthe industry's standard.</p>

                        <button className='bg-primary text-white px-6 py-2 rounded-full mt-5'>Learn More</button>

                    </div>
                </div>

                <div className='mt-20 pb-20 border-b border-primary'>
                    <h1 className='md:text-3xl text-2xl font-bold text-center mb-10'> Education & Experience</h1>

                    <div className='aboutBg'>
                        <div className='flex items-center z-10'>
                            <div className='w-[47%]'>
                                <p className='text-error text-end font-bold'>2010</p>
                                <h1 className='text-xl text-end font-medium mt-1'>Secondary School Certificate</h1>
                                <p className='text-end leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>


                                <p className='text-error text-end font-bold mt-5'>2010-2011</p>
                                <h1 className='text-xl text-end font-medium mt-1'>Higher School Certificate</h1>
                                <p className='text-end leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>


                                <p className='text-error text-end font-bold mt-5'>2016</p>
                                <h1 className='text-xl text-end font-medium mt-1'>Master of Arts</h1>
                                <p className='text-end leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>
                            </div>
                            <div className='w-[6%]'>
                                <Image
                                    src={mark}
                                    alt="image"
                                    width={25}
                                    height={25}
                                    className='mx-auto'
                                />
                            </div>
                            <div className='w-[47%]'>
                                <p className='text-error font-bold'>Ui Designer (2012-13)</p>
                                <h1 className='text-xl font-medium mt-1'>Premium it Company</h1>
                                <p className='leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>


                                <p className='text-error  font-bold mt-5'>Marketing Officer (2015)</p>
                                <h1 className='text-xl  font-medium mt-1'>Adam Smith C3 Company USA</h1>
                                <p className=' leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>


                                <p className='text-error  font-bold mt-5'>Freelancer (2016)</p>
                                <h1 className='text-xl font-medium mt-1'>Fiver, Upwork, Envato, etc</h1>
                                <p className=' leading-6 text-sm text-neutral mt-2'>Lorem Ipsum is simply to dumy text of the printing and <br /> the industry. Lorem Ipsum text ever has been</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <WorkGallery/>
                <NetWork/>
                <WorkProject/>
                <Faq/>
            </div>
        </>

    );
};

export default index;
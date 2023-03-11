import React from 'react';
import photoshop from '../../../assets/images/Skill/photoshop.png'
import illustrator from '../../../assets/images/Skill/illustrator.png'
import adobe from '../../../assets/images/Skill/adove.png'
import figma from '../../../assets/images/Skill/figma.png'
import Image from 'next/image';


const Skill = () => {
    return (
        <div className='mid-container'>
            <div className=' mt-20'>
                <div className='md:flex justify-between items-center '>
                    <h1 className='text-2xl font-medium mb-1'>My Creative Skills</h1>
                    <div className='flex gap-5 font-medium items-center mt-4 md:mt-0'>
                        <h1 className='cursor-pointer text-primary hover:text-primary duration-300'>Design</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Development</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Digital Marketing</h1>
                    </div>
                </div>
                <div className='mt-14 grid md:grid-cols-4 grid-cols-2 gap-10 justify-evenly'>
                    <Image
                        src={photoshop}
                        alt="photoshop"
                        width={130}
                        height={100}
                        className='mx-auto'
                    />
                    <Image
                        src={illustrator}
                        alt="photoshop"
                        width={130}
                        height={100}
                        className='mx-auto'
                    />
                    <Image
                        src={adobe}
                        alt="photoshop"
                        width={130}
                        height={100}
                        className='mx-auto'
                    />
                    <Image
                        src={figma}
                        alt="photoshop"
                        width={130}
                        height={100}
                        className='mx-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default Skill;
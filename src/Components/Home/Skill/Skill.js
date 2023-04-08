import React from 'react';
import photoshop from '../../../assets/images/Skill/photoshop.png'
import illustrator from '../../../assets/images/Skill/illustrator.png'
import adobe from '../../../assets/images/Skill/adove.png'
import figma from '../../../assets/images/Skill/figma.png'
import Image from 'next/image';
import design from '../../../../public/designs.json'
import development from '../../../../public/development.json'
import marketing from '../../../../public/marketing.json'
import { useState } from 'react';


const Skill = () => {
    const [skillData, setSkillData] = useState(true)
    const [developmentData, setDevelopmentData] = useState(false)
    const [marketingData, setMarketingData] = useState(false)


    const handleDesignDataFetch = () => {
        setSkillData(true)
        setDevelopmentData(false)
        setMarketingData(false)
    }

    const handleDevelopmentData = () => {
        setSkillData(false)
        setDevelopmentData(true)
        setMarketingData(false)
    }

    const handleMarketingData = () => {
        setSkillData(false)
        setDevelopmentData(false)
        setMarketingData(true)
    }
    return (
        <div className='mid-container'>
            <div className=' mt-20'>
                <div className='md:flex justify-between items-center '>
                    <h1 className='text-2xl font-medium mb-1'>My Creative Skills</h1>
                    <div className='flex gap-5 font-medium items-center mt-4 md:mt-0'>
                        <h1
                            onClick={handleDesignDataFetch}
                            className={`cursor-pointer ${skillData && "text-primary"}  hover:text-primary duration-300`}>Design</h1>
                        <h1
                            onClick={handleDevelopmentData}
                            className={`cursor-pointer ${developmentData && "text-primary"}  hover:text-primary duration-300`}>Development</h1>
                        <h1
                            onClick={handleMarketingData}
                            className={`cursor-pointer ${marketingData && "text-primary"}  hover:text-primary duration-300`}>Digital Marketing</h1>
                    </div>
                </div>
                <div className='mt-14 grid md:grid-cols-4 grid-cols-2 gap-10 justify-evenly'>
                    {
                        skillData && design.map((data) => (
                            <div className='text-center space-y-2'>
                                <Image
                                    src={data.img}
                                    alt={data.img}
                                    width={130}
                                    height={100}
                                    className='mx-auto'
                                />
                                <h1 className='text-xl font-semibold'>{data.title}</h1>
                            </div>
                        ))
                    }
                    {
                        developmentData && development.map((data) => (
                            <div className='text-center space-y-2'>
                                <Image
                                    src={data.img}
                                    alt={data.img}
                                    width={130}
                                    height={100}
                                    className='mx-auto'
                                />
                                <h1 className='text-xl font-semibold'>{data.title}</h1>
                            </div>
                        ))
                    }
                    {
                        marketingData && marketing.map((data) => (
                            <div className='text-center space-y-2'>
                                <Image
                                    src={data.img}
                                    alt={data.img}
                                    width={130}
                                    height={100}
                                    className='mx-auto'
                                />
                                <h1 className='text-xl font-semibold'>{data.title}</h1>
                            </div>
                        ))
                    }
                </div>
                {/* <Image
                        src={figma}
                        alt="photoshop"
                        width={130}
                        height={100}
                        className='mx-auto'
                    /> */}
            </div>
        </div>
    );
};

export default Skill;
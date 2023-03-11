import Image from 'next/image';
import React from 'react';
import dribble from '../../../assets/images/social/dribbble 1.png'
import linkedIn from '../../../assets/images/social/linkedin (1) 1.png'
import instagram from '../../../assets/images/social/instagram 1.png'
import behance from '../../../assets/images/social/behance 1.png'

const Social = () => {
    return (
        <div className=' mid-container'>
            <div className=' mt-16 grid md:grid-cols-4 grid-cols-2 gap-7 border-b-[1px] border-[#cff3f8] pb-16'>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        src={dribble}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Dribble</h1>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        src={linkedIn}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Dribble</h1>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        src={instagram}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Dribble</h1>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        src={behance}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Dribble</h1>
                </div>
            </div>
        </div>
    );
};

export default Social;
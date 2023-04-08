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
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Facebook</h1>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        src={'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png'}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>Twitter</h1>
                </div>
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
                        src={'https://freepngimg.com/download/linkedin/8-2-linkedin-png-picture.png'}
                        alt="dribble"
                        width={50}
                        height={50}
                    ></Image>
                    <h1 className='text-xl font-bold text-info'>LinkedIn</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Social;
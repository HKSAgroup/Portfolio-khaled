import React from 'react';
import google from '../../src/assets/Contact/google.png'
import facebook from '../../src/assets/Contact/facebook.png'
import instagram from '../../src/assets/Contact/instagrams.png'
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';

const Checkout = () => {
    return (
        <div className='mid-container md:grid grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl mt-20 font-medium mb-10'>Additions Options </h1>

                <div className='space-y-5 h-96 overflow-y-scroll scroll-m-11'>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={google}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Google Ads (Trading) </p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={facebook}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Facebook Ads (Trading)</p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={instagram}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Instagram Ads (Trading) </p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={google}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Google Ads (Trading) </p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={google}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Google Ads (Trading) </p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={instagram}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Instagram Ads (Trading) </p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 w-full'>
                        <Image
                            src={facebook}
                            alt='google'
                            width={53}
                            height={40}
                            className='border rounded p-2'
                        />
                        <div className='flex justify-evenly gap-5 border-y py-3 w-full'>
                            <p className=''>Facebook Ads (Trading)</p>
                            <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                            <p>$305</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white py-[10px] px-5 rounded' type="">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mt-20 font-medium mb-10'>Shopping Cart </h1>

                <div>
                    <div className='space-y-5 h-80 overflow-y-scroll scroll-m-11'>
                        <div className='flex items-center justify-between gap-3 w-full'>
                            <div className='flex justify-between gap-5 border-y py-3 w-full'>
                                <p className=''>Google Ads (Trading) </p>
                                <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                                <p>$305</p>
                                <MdDelete className='text-2xl cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex items-center  gap-3 w-full'>
                            <div className='flex justify-between gap-5 border-y py-3 w-full'>
                                <p className=''>Facebook Ads (Trading)</p>
                                <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                                <p>$305</p>
                                <MdDelete className='text-2xl cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex items-center  gap-3 w-full'>
                            <div className='flex justify-between gap-5 border-y py-3 w-full'>
                                <p className=''>Instagram Ads (Trading) </p>
                                <p className='bg-base-200 text-xl rounded-full h-7 w-7 flex justify-center items-center'>?</p>
                                <p>$305</p>
                                <MdDelete className='text-2xl cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>Total:</h1>
                        <h1 className='text-xl font-medium'>$610</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
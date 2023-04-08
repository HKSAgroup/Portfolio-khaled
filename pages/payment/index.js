import Image from 'next/image';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';
import bank from '../../src/assets/payment/bank.png'
import mobile from '../../src/assets/payment/mobile.png'
import paypal from '../../src/assets/payment/paypal.png'
import payment from '../../src/assets/payment/Frame.png'

const index = () => {
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-4xl font-bold text-center mb-1'>Payment Now</h1>
                        <p className='text-neutral text-sm text-center'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
                    </div>
                </div>
            </div>

            <div className='mid-container'>
                <h1 className='mt-28 text-2xl font-medium mb-10'>Select a Card</h1>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                    {/* <div className='sm:flex justify-center items-center px-4 py-9 gap-3 shadow  relative'>
                        <Image
                            src={bank}
                            alt="image"
                            width={50}
                            height={50}
                            className='mx-auto'
                        />
                        <h1 className='text-xl font-medium text-center mt-3 sm:mt-0'>Bank Card</h1>

                        <div className='absolute bottom-0 right-0  bg-base-200 p-1 cursor-pointer rounded-l rounded-t'>
                            <IoIosArrowDown className='text-xl text-info font-bold' />
                        </div>
                    </div> */}
                    <div className='sm:flex justify-center items-center px-4 py-9 gap-3 shadow  relative'>
                        <Image
                            src={mobile}
                            alt="image"
                            width={50}
                            height={50}
                            className='mx-auto'
                        />
                        <h1 className='text-xl font-medium text-center mt-3 sm:mt-0'>Mobile Banking</h1>

                        <div className='absolute bottom-0 right-0 bg-base-200 p-1 cursor-pointer rounded-l rounded-t'>
                            <IoIosArrowDown className='text-xl text-info font-bold' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center px-4 py-9 gap-3 shadow  relative'>
                        <Image
                            src={paypal}
                            alt="image"
                            width={120}
                            height={100}

                        />

                        <div className='absolute bottom-0 right-0 bg-base-200 p-1 cursor-pointer rounded-l rounded-t'>
                            <IoIosArrowDown className='text-xl text-info font-bold' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center px-4 py-9 gap-3 shadow  relative cursor-pointer'>
                        <div>
                            <HiOutlinePlus className='text-3xl text-info mx-auto' />
                            <h1 className='text-xl font-medium text-center mt-3 sm:mt-0'>Add Card</h1>
                        </div>

                        <div className='absolute bottom-0 right-0 bg-base-200 p-1 cursor-pointer rounded-l rounded-t'>
                            <IoIosArrowDown className='text-xl text-info font-bold' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-28 pb-20'>
                <div className='mid-container md:flex items-center gap-10'>
                    <div className='md:w-[50%]'>
                        <Image
                            src={payment}
                            alt="image"
                            width={800}
                            height={500}
                            className='w-[80%] mx-auto'
                        />
                    </div>
                    <div className='md:w-[50%]'>
                        <h1 className='text-2xl mb-5 mt-10 md:mt-0'>Payment Details</h1>
                        <form
                            // onSubmit={(e) => handleFormSubmit(e)}
                            className=''>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control mb-3">
                                    <label className='mb-1 text-neutral ml-2'>Card Name*</label>
                                    <input type="name" placeholder="Enter Card Name" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className='mb-1 text-neutral ml-2'>Card Number*</label>
                                    <input type="text" placeholder="1233 256 21598" className="input input-bordered mb-3 focus:outline-none" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control mb-3">
                                    <label className='mb-1 text-neutral ml-2'>Expiration*</label>
                                    <input type="text" placeholder="Enter Expiration" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className='mb-1 text-neutral ml-2'>CVV Code *</label>
                                    <input type="digit" placeholder="456746886|" className="input input-bordered focus:outline-none mb-3" />
                                </div>
                            </div>
                            <p className='text-xs mt-3 text-neutral'>It is a long established fact that a reader will be distracted by the re day,It is a long estab reader will be distracted by the re daylunches.</p>

                            <div className='sm:flex gap-6 w-full'>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary btn-outline text-white sm:w-52  font-normal">Go Back</button>
                                </div>
                                <div className="form-control mt-6 w-full">
                                    <button type='submit' className="btn btn-primary text-white w-full font-normal">Confirm Payment  $30</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
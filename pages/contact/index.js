import React from 'react';
import facebook from '../../src/assets/Contact/facebook.png'
import fiver from '../../src/assets/Contact/fiver.png'
import linkedIn from '../../src/assets/Contact/linkedIn.png'
import upWork from '../../src/assets/Contact/upwork.png'
import twitter from '../../src/assets/Contact/twitter.png'
import beHance from '../../src/assets/Contact/behance.png'
import instagram from '../../src/assets/Contact/instagram.png'
import call from '../../src/assets/About/phone.png'
import service from '../../src/assets/About/service.png'
import Image from 'next/image';

const Contact = () => {
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-4xl font-bold text-center mb-1'>Contact Me</h1>
                        <p className='text-neutral text-sm text-center'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
                    </div>
                </div>
            </div>

            <div className='mid-container'>
                <h1 className='sm:mt-20 mt-10 text-3xl font-medium mb-10 text-center'>Hire or Contact Me</h1>

                <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10'>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={facebook}
                            alt='facebook'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>Facebook</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='bg-[#00B22D] rounded-full p-2'>
                            <Image
                                src={fiver}
                                alt='fiver'
                                width={14}
                                height={30}
                            />
                        </div>
                        <h2 className='font-bold text-xl'>Fiver</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={linkedIn}
                            alt='linkedin'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>LinkedIn</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={upWork}
                            alt='upwork'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>Upwork</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={twitter}
                            alt='twitter'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>Twitter</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={beHance}
                            alt='behance'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>Behance</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image
                            src={instagram}
                            alt='instagram'
                            width={35}
                            height={35}
                        />
                        <h2 className='font-bold text-xl'>Instagram</h2>
                    </div>
                </div>


                <div className=' md:mt-28 sm:mt-20 mt-16 md:grid grid-cols-2 gap-20'>
                    <div className='md:w-[90%] h-full rounded mb-10 md:mb-0'>
                        <iframe title='gy-center' className='w-full h-full rounded-xl border' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.3394637867245!2d90.4089246!3d23.7931358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d45f384f41%3A0x98664f1c6c6834c1!2sCrossFit%20Assemble!5e0!3m2!1sen!2sbd!4v1663300853941!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                    <div>
                        <form
                            // onSubmit={(e) => handleFormSubmit(e)}
                            className=''>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control mb-3">
                                    <label className='mb-1 text-neutral ml-2'>Full Name*</label>
                                    <input type="name" placeholder="Julia William" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className='mb-1 text-neutral ml-2'>Your Email*</label>
                                    <input type="text" placeholder="you@example.com" className="input input-bordered mb-3 focus:outline-none" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control mb-3">
                                    <label className='mb-1 text-neutral ml-2'>Project*</label>
                                    <input type="project" placeholder="Ui Design" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className='mb-1 text-neutral ml-2'>Budget *</label>
                                    <input type="budget" placeholder="100-200$" className="input input-bordered focus:outline-none mb-3" />
                                </div>
                            </div>
                            <div className="form-control h-32 mt-3">
                                <label className='mb-1 text-neutral ml-2'>Project Details*</label>
                                <textarea className="textarea textarea-bordered h-full focus:outline-none" placeholder="Write..."></textarea>
                            </div>
                            <p className='text-xs mt-3 text-neutral'>It is a long established fact that a reader will be distracted by the re day,It is a long estab
                                reader will be distracted by the re daylunches.</p>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-white w-32">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div>
                    <h1 className='text-3xl mb-3 lg:mt-28 sm:mt-20 mt-10 font-bold text-center'>And Directly Contact Me</h1>
                    <p className='text-sm text-neutral text-center'>It is a long established fact that a reader will be distracted by <br /> It is a long established fact that a reader will</p>
                </div>

                <div className='md:flex justify-center items-center mt-10 mb-20 gap-6 space-y-6 md:space-y-0'>
                    <div className='text-center bg-white shadow px-10 py-16 md:w-[40%] rounded-xl'>
                        <Image
                            src={call}
                            alt="Picture of the author"
                            width={25}
                            height={25}
                            className='mx-auto'
                        />
                        <h1 className='font-semibold mt-3'>+1 (573) 360-1837</h1>
                        <p className='text-sm text-neutral mt-2'>We are always happy to help.</p>
                    </div>
                    <div className='text-center bg-white shadow px-10 py-16 rounded-xl md:w-[40%]'>
                        <Image
                            src={service}
                            alt="Picture of the author"
                            width={25}
                            height={25}
                            className='mx-auto'
                        />
                        <h1 className='font-semibold mt-3'>support@khaledfullstack.com</h1>
                        <p className='text-sm text-neutral mt-2'>We are always happy to help.</p>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Contact;
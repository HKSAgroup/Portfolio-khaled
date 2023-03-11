import Image from 'next/image';
import React from 'react';
import phone from '../../../assets/About/phone.png'
import service from '../../../assets/About/service.png'

const Faq = () => {
    return (
        <div className='faqBg md:pb-28'>
            <div className='mid-container '> 
                <div className='mt-20 grid gap-5 text-[#747680]'>
                    <h1 className='text-3xl mb-10 font-bold text-center'>FAQ's</h1>
                    <div tabIndex={0} className="collapse collapse-arrow shadow rounded py-2 bg-white">
                        <div className="collapse-title font-medium text-primary">
                            How do I pay for the Essentials or Premium plan?
                        </div>
                        <div className="collapse-content ">
                            <p className='text-sm'> It is a long established fact that a reader will be distracted by the re day, It is a long established fact that a reader will be distracted by the re day lunches.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow shadow rounded py-2 bg-white">
                        <div className="collapse-title font-medium text-primary">
                            How do I pay for the Essentials or Premium plan?
                        </div>
                        <div className="collapse-content ">
                            <p className='text-sm'> It is a long established fact that a reader will be distracted by the re day, It is a long established fact that a reader will be distracted by the re day lunches.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow shadow rounded py-2 bg-white">
                        <div className="collapse-title font-medium text-primary">
                            How do I pay for the Essentials or Premium plan?
                        </div>
                        <div className="collapse-content ">
                            <p className='text-sm'> It is a long established fact that a reader will be distracted by the re day, It is a long established fact that a reader will be distracted by the re day lunches.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow shadow rounded py-2 bg-white">
                        <div className="collapse-title font-medium text-primary">
                            How do I pay for the Essentials or Premium plan?
                        </div>
                        <div className="collapse-content ">
                            <p className='text-sm'> It is a long established fact that a reader will be distracted by the re day, It is a long established fact that a reader will be distracted by the re day lunches.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow shadow rounded  py-2 bg-white">
                        <div className="collapse-title font-medium text-primary">
                            How do I pay for the Essentials or Premium plan?
                        </div>
                        <div className="collapse-content ">
                            <p className='text-sm'> It is a long established fact that a reader will be distracted by the re day, It is a long established fact that a reader will be distracted by the re day lunches.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl mb-3 mt-20 font-bold text-center'>Still have a question?</h1>
                    <p className='text-sm text-neutral text-center'>It is a long established fact that a reader will be distracted by <br />
                        It is a long established fact that a reader will</p>
                </div>

                <div className='md:flex justify-center items-center mt-14 gap-6 space-y-6 md:space-y-0'>
                    <div className='text-center bg-white shadow px-10 py-16 md:w-[40%] rounded-xl'>
                        <Image
                            src={phone}
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
        </div>
    );
};

export default Faq;
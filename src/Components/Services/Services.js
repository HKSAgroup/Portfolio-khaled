import React from 'react';
import WorkProjectItem from '../About/WorkProject/WorkProjectItem';
import ServicesItem from './ServicesItem';

const Services = () => {
    let btnActive = true;
    return (
        <div className='mid-container'>
            <div className=' md:my-16 my-7  flex justify-center '>
                    <input type="search" name=""  className='input input-bordered md:w-[50%] w-full rounded-l rounded-r-none focus:outline-0' />
                    <button className='btn btn-primary rounded-r rounded-l-none text-white'>Search</button>
            </div>
            <div className='md:flex justify-between items-center'>


                <div>
                    <h1 className='md:text-3xl text-2xl font-bold'>We provide that service</h1>
                </div>
                <div className='sm:flex justify-between gap-6 mt-5 md:mt-0'>
                    <div className='flex gap-5 font-medium items-center'>
                        <h1 className='cursor-pointer text-primary hover:text-primary duration-300'>All</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Design</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Development</h1>
                        <h1 className='cursor-pointer hover:text-primary duration-300'>Marketing</h1>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-14 mt-14'>
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
            </div>

            <div className='flex justify-center items-center mt-20 pb-28'>
                <div className="btn-group bg-accent">
                    <button className="btn bg-accent  hover:bg-primary hover:text-white duration-200">1</button>
                    <button className={`btn btn-active bg-accent  hover:bg-primary hover:text-white duration-200 `}>2</button>
                    <button className="btn bg-accent  hover:bg-primary hover:text-white duration-200">3</button>
                    <button className="btn bg-accent hover:bg-primary hover:text-white duration-200">4</button>
                    <button className="btn bg-accent hover:bg-primary hover:text-white duration-200">5</button>
                    <button className="btn bg-accent hover:bg-primary hover:text-white duration-200">6</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
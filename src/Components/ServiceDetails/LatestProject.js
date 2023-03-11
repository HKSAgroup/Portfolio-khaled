import React from 'react';
import ServicesItem from '../Services/ServicesItem';

const LatestProject = () => {
    return (
        <div className='mt-28 mb-20'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-medium'>Latest Project</h1>

                <h1 className='border border-primary rounded-full px-4 py-2 flex justify-center items-center text-sm hover:bg-primary hover:text-white duration-200 
                cursor-pointer'>See All Project</h1>

            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-14 mt-14'>
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
            </div>
        </div>
    );
};

export default LatestProject;
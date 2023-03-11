import React from 'react';
import WorkProjectItem from './WorkProjectItem';

const WorkProject = () => {
    return (
        <div className='mid-container'>
            <div className='mt-20 md:flex justify-between items-center'>
                <div>
                    <h1 className='md:text-3xl text-2xl font-bold'>Do you want to know, <br /> How Us Work?</h1>
                </div>
                <div className='md:w-[30%] mt-5 md:mt-0'>
                    <p className='text-justify text-neutral text-sm leading-7'>Event madness gathering inovators, start upsur do for the event madness gathering innovators, the cear ofstartups you
                        enthusiasts.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-14 mt-20'>
                <WorkProjectItem/>
                <WorkProjectItem/>
                <WorkProjectItem/>
                <WorkProjectItem/>
                <WorkProjectItem/>
                <WorkProjectItem/>
            </div>
        </div>
    );
};

export default WorkProject;
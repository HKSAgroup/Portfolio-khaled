import React from 'react';
import Services from '../../src/Components/Services/Services';


const index = () => {
    return (
        <>
            <div className='bg-accent'>
                <div className='mid-container flex justify-center '>
                    <div className='py-20'>
                        <h1 className='text-3xl font-bold text-center mb-1'>My Services </h1>
                        <p className='text-neutral text-sm text-center'>Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for</p>
                    </div>
                </div>
            </div>

            <Services />
        </>
    );
};

export default index;
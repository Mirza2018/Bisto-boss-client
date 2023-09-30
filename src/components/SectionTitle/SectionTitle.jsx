import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='mx-auto my-10 w-3/12 text-center'>
            <p className='text-yellow-600 pb-3 '>---{subHeading}---</p>
            <h1 className='text-4xl uppercase  border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;
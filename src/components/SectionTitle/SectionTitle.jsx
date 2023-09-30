import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <p className='text-yellow-600'>---{subHeading}---</p>
            <h1 className='text-3xl'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;
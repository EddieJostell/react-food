import React from 'react';

const Banner = () => {
  return (
    <div
      data-testid='banner'
      className='flex justify-center items-center h-28 w-full bg-purple-900 mb-2.5 rounded-lg'
    >
      <h1 className='font-semibold text-white sm:text-3xl md:text-4xl text-xl'>
        Men va fan har du ingen fantasi?
      </h1>
    </div>
  );
};

export default Banner;

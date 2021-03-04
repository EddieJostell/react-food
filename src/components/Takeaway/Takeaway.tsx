import React from 'react';
import { ITakeAway } from '../../utils/data';

interface ITakeAwayProps {
  company: any;
}

const Takeaway = (props: ITakeAwayProps) => {
  const { company } = props;

  return (
    <div className='flex justify-center items-center h-28 w-full bg-pink-500 my-2.5 rounded-lg'>
      {/*  <h1 className='font-semibold text-white text-4xl'>Takeaway här!</h1> */}
      <h1 className='font-semibold text-white text-4xl'>
        <a
          className='hover:underline'
          target='_blank'
          rel='noreferrer noopener'
          href={company.companies.link}
        >
          {company.companies.company}
        </a>
      </h1>
    </div>
  );
};

export default Takeaway;

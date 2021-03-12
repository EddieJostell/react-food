import React from 'react';
import { ITakeAway } from '../../utils/data';
interface ITakeAwayProps {
  company: ITakeAway;
}

const Takeaway = (props: ITakeAwayProps) => {
  const { company } = props;

  return (
    <div
      data-testid='takeaway'
      className='flex justify-center items-center h-28 w-full bg-pink-500 my-2.5 rounded-lg'
    >
      <h1 className='font-semibold text-white sm:text-4xl text-2xl'>
        <a
          className='hover:underline'
          target='_blank'
          rel='noreferrer noopener'
          href={company.link}
        >
          {company.name}
        </a>
      </h1>
    </div>
  );
};

export default Takeaway;

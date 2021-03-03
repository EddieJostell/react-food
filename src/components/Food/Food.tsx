import React from 'react';
import { IRecipe } from '../../utils/data';
interface IFoodProps {
  food: any;
}

const Food = (props: IFoodProps) => {
  const { food } = props;

  return (
    <div className='flex justify-center items-center h-28 w-full bg-red-900 my-2.5 rounded-lg'>
      <h1 className='font-semibold text-white text-4xl'>
        <a
          className='hover:underline'
          target='_blank'
          rel='noreferrer noopener'
          href={food.dish.link}
        >
          {food.dish.dish}
        </a>
      </h1>
    </div>
  );
};

export default Food;

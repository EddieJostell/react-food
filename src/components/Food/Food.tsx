import React from 'react';
import { IRecipe } from '../../utils/data';
export interface IFoodProps {
  food: IRecipe;
}

const Food = (props: IFoodProps) => {
  const { food } = props;

  console.log(food);

  return (
    <div className='flex justify-center items-center h-28 w-full bg-red-900 my-2.5 rounded-lg'>
      <h1 className='font-semibold text-white sm:text-3xl md:text-4xl text-xl'>
        <a
          className='hover:underline'
          target='_blank'
          rel='noreferrer noopener'
          href={food.link}
        >
          {food.dish}
        </a>
      </h1>
    </div>
  );
};

export default Food;

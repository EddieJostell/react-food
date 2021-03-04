import React, { useState } from 'react';

interface IDashboardProps {
  recipe: () => void;
  type: () => void;
  takeout: () => void;
  fastfood: boolean;
}

const Dashboard = (props: IDashboardProps) => {
  const { recipe, type, takeout, fastfood } = props;

  return (
    <div className='flex justify-center items-center h-28 w-full bg-green-900 my-2.5 rounded-lg'>
      <div className='flex flex-row justify-between items-center w-1/2 mx-auto'>
        <button
          onClick={recipe}
          className='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-400 hover:text-gray-100 focus:outline-none'
        >
          Lös Uppgiften
        </button>
        {!fastfood ? (
          <label className='flex flex-row items-center'>
            <input
              id='veggo'
              value='veggo'
              name='veggo'
              className='h-9 w-9 mr-2 cursor-pointer focus:border-red-700'
              type='checkbox'
              onChange={type}
            />
            <span className='font-semibold text-white text-2xl cursor-pointer focus:border-red-700'>
              Kött är mord!
            </span>
          </label>
        ) : (
          ''
        )}
        <label className='flex flex-row'>
          <input
            id='takeout'
            value='takeout'
            name='takeout'
            className='h-9 w-9 mr-2'
            type='checkbox'
            onChange={takeout}
          />
          <span className='font-semibold text-white text-2xl'>Lathund</span>
        </label>
      </div>
    </div>
  );
};

export default Dashboard;

//bg-green-900

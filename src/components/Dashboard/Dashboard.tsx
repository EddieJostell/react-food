import React from 'react';

interface IDashboardProps {
  recipe: () => void;
  type: () => void;
  takeout: () => void;
  howto: () => void;
  fastfood: boolean;
}

const Dashboard = (props: IDashboardProps) => {
  const { recipe, type, takeout, fastfood, howto } = props;

  return (
    <div className='flex justify-center items-center h-28 w-full bg-green-900 my-2.5 rounded-lg'>
      <div
        className={` flex w-full flex-col sm:flex-row justify-between items-center px-2 ${
          !fastfood ? 'sm:justify-around' : 'sm:justify-center'
        }`}
      >
        <div className='flex justify-center items-center w-full sm:w-auto'>
          <button
            onClick={howto}
            className='bg-gray-900 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-gray-900 hover:border-white rounded mr-2'
          >
            How to?
          </button>
          <button
            onClick={recipe}
            className='bg-gray-900 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-gray-900 hover:border-white rounded ml-2'
          >
            Shuffle
          </button>
        </div>
        <div className='flex flex-row justify-center mt-3 sm:mt-0 w-full sm:w-auto'>
          {!fastfood && (
            <div>
              <label className='flex flex-row items-center mr-2'>
                <input
                  id='veggo'
                  value='veggo'
                  name='veggo'
                  className='w-7 h-7 sm:w-9 sm:h-9 mr-2 cursor-pointer text-pink-600'
                  type='checkbox'
                  onChange={type}
                />
                <span className='font-semibold text-white text-xl md:text-2xl cursor-pointer'>
                  Vegetarian?
                </span>
              </label>
            </div>
          )}
          <div className={`${!fastfood ? 'ml-2' : 'ml-0 sm:ml-4'}`}>
            <label className='flex flex-row'>
              <input
                id='takeout'
                value='takeout'
                name='takeout'
                className='w-7 h-7 sm:w-9 sm:h-9 mr-2 cursor-pointer text-pink-600'
                type='checkbox'
                onChange={takeout}
              />
              <span className='font-semibold text-white text-xl md:text-2xl cursor-pointer'>
                Lazy?
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//bg-green-900

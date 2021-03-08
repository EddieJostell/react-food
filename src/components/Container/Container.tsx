import React from 'react';

function Container(props: { children: React.ReactNode }) {
  return (
    <div className='md:max-w-screen-lg mx-auto pt-24 sm:pt-0 lg:pt-24'>
      {props.children}
    </div>
  );
}

export default Container;

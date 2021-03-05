import React from 'react';

function Container(props: { children: React.ReactNode }) {
  return (
    <div className='md:max-w-screen-lg mx-auto md:pt-24'>{props.children}</div>
  );
}

export default Container;

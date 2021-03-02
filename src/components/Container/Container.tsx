  
import React from 'react';

function Container(props: { children: React.ReactNode }) {
  return <div className="max-w-sm md:max-w-screen-lg mx-auto pt-24">{props.children}</div>;
}

export default Container;
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Typed = () => {
  const [ text  ]= useTypewriter({
    words: ['NEWS', 'UPDATES', 'INNOVATION','TRENDS'],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className='ml-5 font-mono  ' >
        <h1 className="text-bold text-4xl bg-gradient-to-r from-orange-600 to-purple-950 bg-clip-text text-transparent p-3'">
         TECH{' '}
      <span className="text-bold text-4xl bg-gradient-to-r from-orange-600 to-purple-800 bg-clip-text text-transparent p-3'">{text}</span>
      <Cursor />
        </h1>

    </div>
    
  );
};

export default Typed;

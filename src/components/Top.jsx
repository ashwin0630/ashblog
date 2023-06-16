import React from 'react'
import Lottie from 'lottie-react'
import computeranimation from '../assets/computer.json'
import Typed from './Typed';

const Top = () => {
  return (
    <div className='flex w-[100%] h-[350px] justify-between'>
      <div className='h-[100%] w-[50%] flex items-center pb-6 ml-2'>
        <div className='w-[100%]'>
          <div className='pl-4 flex '>
          <h1 className="font-mono text-6xl  bg-gradient-to-r from-orange-600 to-purple-950 bg-clip-text text-transparent p-3 font-bold mt-0 ml-2">Assh Blog</h1>
          </div>
          <div className='p-8 pt-10 pl-30'>
            <Typed/> 
          </div>      
        </div>
      </div>
      <div className='w-[450px]'>
       <Lottie animationData={computeranimation}/>
      </div>
    </div>
  )
}

export default Top
import React from 'react';
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
      
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-xl leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis praesentium sit voluptas laboriosam minima quidem consequuntur quasi animi atque.
            </p>
            <div className='flex justify-between'>
                <button className='bg-blue-500 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                <button className='bg-blue-500 text-white font-medium px-3 py-3 rounded-full'><ArrowRight size={20} /></button>
            </div>
        </div>
      </div>

  );
}

export default RightCardContent;

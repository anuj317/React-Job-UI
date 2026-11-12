import React from 'react';
import { ArrowUpRight } from 'lucide-react';
const HeroText = () => {
  return (
    <div className='h-full flex-col justify-between w-1/3 '>
      <div className='p-6'>
         <h3 className=' mb-7 text-7xl font-bold'>Prospective <br /><span className='text-gray-600 '>Customer</span> <br />Segmentation</h3>
         <p className='p-4 text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati vero, officiis ipsum voluptatibus saepe nihil atque at eius dolorem.</p>
      </div>
      <div className='text-9xl'><ArrowUpRight size={30}/></div>
    </div>
  );
}
export default HeroText;

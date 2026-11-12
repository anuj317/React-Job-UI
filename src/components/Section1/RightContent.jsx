
import React from 'react';
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-5 p-6 w-3/4'>
      {props.users.map((elem, index) => {
        return (
          <RightCard
            key={index}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;

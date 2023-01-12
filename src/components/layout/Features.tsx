import React from 'react';

const Feature = ({ title, text }: any) => (
  <div className='gpt3__features-container__feature m-4 flex  flex-col justify-center md:items-center lg:flex-row'>
    <div className='gpt3__features-container__feature-title mr-8 lg:max-w-[180px] '>
      <div className='mb-1 h-[3px] bg-gradient-to-r from-g3  to-g4 shadow-bs2 md:w-[38px]' />
      <h1 className='flex w-full font-mono  font-bold text-white lg:text-[18px] lg:leading-[24px] lg:-tracking-[0.04em]'>
        {title}
      </h1>
    </div>
    <div className='gpt3__features-container_feature-text max-w[390px] flex '>
      <p className='font-mono font-medium text-color_text lg:text-[14px] lg:leading-[24px]'>
        {text}
      </p>
    </div>
  </div>
);

export default Feature;

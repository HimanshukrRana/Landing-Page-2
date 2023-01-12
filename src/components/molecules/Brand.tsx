/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Brand = () => {
  return (
    <div className='gpt3__brand  flex flex-wrap items-center justify-center p-[4rem] md:px-[6rem]'>
      <div className='m-4 flex min-w-[120px] max-w-[150px] flex-1 items-center justify-center'>
        <img src='/assets/google.png' alt='' />
      </div>
      <div className='m-4 flex min-w-[120px] max-w-[150px] flex-1 items-center justify-center'>
        <img src='/assets/slack.png' alt='' />
      </div>
      <div className='m-4 flex min-w-[120px] max-w-[150px] flex-1 items-center justify-center'>
        <img src='/assets/slack.png' alt='' />
      </div>
      <div className='m-4 flex min-w-[120px] max-w-[150px] flex-1 items-center justify-center'>
        <img src='/assets/atlassian.png' alt='' />
      </div>
      <div className='m-4 flex min-w-[120px] max-w-[150px] flex-1 items-center justify-center'>
        <img src='/assets/shopify.png' alt='' />
      </div>
    </div>
  );
};

export default Brand;

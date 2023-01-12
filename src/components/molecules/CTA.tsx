import React from 'react';

const CTA = () => (
  <div className='gpt3__cta m-8 mb-0 flex flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-g3 to-g4 p-8 md:m-[6rem] md:flex-row'>
    <div className='gpt3__cta-content color-white flex flex-col text-left '>
      <p className='lg::leading-[30px] font-mono text-[12px] font-bold'>
        Request Early Access to Get Started
      </p>
      <h3 className='md::leading-[45px] lg::text-[24px] font-mono font-bold'>
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>
    <div className='gpt3__cta-btn mt-8 ml-8 flex items-center justify-center md:mt-0'>
      <button
        type='button'
        className='min-w-[150px] cursor-pointer rounded-[2rem] border-none bg-black py-2 px-4 font-mono text-[18px] font-bold leading-[30px] text-white outline-none '
      >
        Get Started
      </button>
    </div>
  </div>
);

export default CTA;

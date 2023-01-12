/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const Possibility = () => (
  <div
    className='gpt3__possibility flex flex-col px-12 md:px-[6rem] lg:flex-row'
    id='possibility'
  >
    <div className='gpt3__possibility-image flex items-start justify-start'>
      <Image
        src='/assets/possibility.png'
        alt='possibility'
        height='608'
        width='546'
        className='h-full w-full'
      />
    </div>
    <div className='gpt3__possibility-content mt-4 flex flex-col justify-end text-color_text md:mt-0'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='bg-gradient-to-r from-g3 to-g4 bg-clip-text text-transparent'>
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4 className='text-orange'>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

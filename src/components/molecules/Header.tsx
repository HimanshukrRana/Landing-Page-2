import Image from 'next/image';
import React from 'react';

import ai from '../../../public/assets/ai.png';
import people from '../../../public/assets/people.png';

const Header = () => (
  <div
    className='gpt3__header flex flex-col p-[3rem]  md:px-[6rem] lg:flex-row'
    id='home'
  >
    <div className='gpt3__header-content mr-[5rem] flex w-full flex-1 flex-col items-start justify-center lg:w-1/2'>
      <h1 className=' bg-gradient-to-r  from-g5 to-g6 bg-clip-text font-mono text-[30px] font-bold -tracking-[0.04em] text-transparent lg:text-[62px] lg:leading-[75px]'>
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className=' mt-6 font-mono text-[20px] font-medium text-white'>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className='gpt3__header-content__input mx-0 mt-8 mb-4 flex w-full '>
        <input
          type='email'
          placeholder='Your Email Address'
          className='flex min-h-[50px] w-full flex-[2_2_0%] rounded-tl-[5px] rounded-bl-[5px] border-2 border-color_footer bg-color_footer py-0 px-4 font-mono text-[20px] font-medium leading-[28px] outline-none '
        />
        <button
          type='button'
          className='min-h-[50px]  cursor-pointer rounded-tr-[5px] rounded-br-[5px] border-2 border-orange bg-orange py-0 px-4 font-mono font-normal leading-[28px] text-white outline-none '
        >
          Get Started
        </button>
      </div>

      <div className='gpt3__header-content__people mt-4'>
        <Image
          src={people}
          alt=''
          height='38'
          width='182'
          className='h-auto w-auto'
        />
        <p className='mt-4 text-white'>
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>

    <div className='gpt3__header-image lg:w-1/2'>
      <Image
        src={ai}
        alt=''
        width='700'
        height='800'
        className='h-auto w-auto'
      />
    </div>
  </div>
);

export default Header;

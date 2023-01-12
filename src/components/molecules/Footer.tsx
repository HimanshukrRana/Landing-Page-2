import Image from 'next/image';
import React from 'react';

const Footer = () => (
  <div className='gpt3__footer flex flex-col items-center justify-center bg-color_footer p-[3rem] md:p-[6rem]'>
    <div className='gpt3__footer-heading mb-12  w-full text-center'>
      <h1 className='bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono text-[30px] font-bold text-transparent lg:text-[64px] lg:leading-[75px]'>
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className='gpt3__footer-btn mb-12 cursor-pointer border-2 border-white p-2 font-mono text-[18px] leading-[21px] text-white'>
      <p>Request Early Access</p>
    </div>

    <div className='gpt3__footer-links mb-8 flex w-full flex-wrap items-start justify-between text-left'>
      <div className='gpt3__footer-links_logo m-4 flex w-[250px] flex-col'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width='63'
          height='17'
          className=' mb-4 h-[30px] w-[119px]'
        />
        <p className='font-mono text-[12px] leading-[15px] text-white'>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4 className='mb-4 bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono text-[14px] leading-[17px] text-transparent'>
          Links
        </h4>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Overons
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Social Media
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Counters
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Contact
        </p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4 className='mb-4 bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono text-[14px] leading-[17px] text-transparent'>
          Company
        </h4>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Terms & Conditions{' '}
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Privacy Policy
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Contact
        </p>
      </div>
      <div className='gpt3__footer-links_div mt-4 md:mt-0'>
        <h4 className='mb-4 bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono text-[14px] leading-[17px] text-transparent'>
          Get in touch
        </h4>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          Crechterwoord K12 182 DK Alknjkcb
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          085-132567
        </p>
        <p className='my-2 mx-0 cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
          info@payme.net
        </p>
      </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p className=' cursor-pointer font-mono text-[12px] leading-[15px] text-white'>
        @2021 GPT-3. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;

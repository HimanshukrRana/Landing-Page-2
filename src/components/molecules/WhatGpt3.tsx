import React from 'react';

import Feature from '../layout/Features';

const WhatGPT3 = () => (
  <div className='gpt3__whatgpt3  p-8 lg:px-[6rem] ' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature m-0 flex bg-gradient-to-r from-g1 to-g2 '>
      <Feature
        title='What is GPT-3'
        text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
      />
    </div>
    <div className='gpt3__whatgpt3-heading mx-0 mt-[4rem] mb-8 flex flex-col items-center justify-between lg:flex-row'>
      <h1 className='max-w-[510px] bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono font-bold text-transparent lg:text-[34px] lg:leading-[45px]'>
        The possibilities are beyond your imagination
      </h1>
      <p className='cursor-pointer font-mono text-[16px] font-medium text-color_subtext lg:leading-[30px]'>
        Explore the Library
      </p>
    </div>
    <div className='gpt3__whatgpt3-container m-0 flex flex-wrap bg-gradient-to-r from-g1  to-g2'>
      <Feature
        title='Chatbots'
        text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
      />
      <Feature
        title='Knowledgebase'
        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
      />
      <Feature
        title='Education'
        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
      />
    </div>
  </div>
);

export default WhatGPT3;

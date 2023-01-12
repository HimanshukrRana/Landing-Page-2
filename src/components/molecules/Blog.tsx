import React from 'react';

import Article from '../layout/Article';

const Blog = () => (
  <div className='gpt3__blog flex  flex-col p-[3rem] md:p-[6rem] ' id='blog'>
    <div className='gpt3__blog-heading mb-[5rem] w-full text-left'>
      <h1 className='bg-gradient-to-r from-g3 to-g4 bg-clip-text font-mono text-[30px] font-bold text-transparent md:text-[62px] md:leading-[75px]  '>
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className='gpt3__blog-container grid grid-cols-1 gap-8 lg:grid-cols-2'>
      <div className='gpt3__blog-container_groupA  mb-8   lg:mb-0 '>
        <Article
          imgUrl='/assets/blog01.png'
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
      <div className='gpt3__blog-container_groupB col-span-1 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2'>
        <Article
          imgUrl='/assets/blog02.png'
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          imgUrl='/assets/blog03.png'
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          imgUrl='/assets/blog04.png'
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Article
          imgUrl='/assets/blog05.png'
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </div>
  </div>
);

export default Blog;

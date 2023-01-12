/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Article = ({ imgUrl, date, text }: any) => (
  <div className='gpt3__blog-container_article flex h-full w-full flex-col bg-color_footer'>
    <div className='gpt3__blog-container_article-image h-full w-full bg-color_bg '>
      <img src={imgUrl} alt='blog_image' className='h-full w-full' />
    </div>
    <div className='gpt3__blog-container_article-content flex h-full flex-col justify-between py-4 px-6'>
      <div>
        <p className='font-mono text-[12px] font-bold leading-[35px] text-white '>
          {date}
        </p>
        <h3 className='mb-[5rem] cursor-pointer font-mono text-[18px] font-bold leading-[25px] text-white md:text-[26px] md:leading-[31px]'>
          {text}
        </h3>
      </div>
      <p className='font-mono text-[12px] font-bold leading-[35px] text-white'>
        Read Full Article
      </p>
    </div>
  </div>
);

export default Article;

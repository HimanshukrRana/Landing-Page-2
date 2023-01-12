import React from 'react';

import Feature from '../layout/Features';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div
    className='gpt3__features flex flex-col justify-between p-[4rem] md:p-[6rem] lg:flex-row'
    id='features'
  >
    <div className='gpt3__features-heading flex flex-1 flex-col text-center md:mr-[5rem] md:items-start md:justify-start md:text-left lg:w-[40%]'>
      <h1 className='  bg-gradient-to-r from-g5 to-g6 bg-clip-text font-mono font-bold text-transparent md:text-[34px] md:leading-[45px]'>
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p className='mt-8 font-mono text-[16px] font-medium text-color_subtext md:leading-[30px]'>
        Request Early Access to Get Started
      </p>
    </div>
    <div className='gpt3__features-container mt-8 flex  flex-[1.5,1.5,0%] flex-col items-center justify-start bg-gradient-to-r from-g1 to-g2 lg:w-[60%]'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

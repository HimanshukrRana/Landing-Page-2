/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='gpt3_navbar flex items-center justify-between px-12 pt-8 md:px-[6rem]'>
      <div className='gpt3_navbar-links flex flex-1 items-center justify-start'>
        <div className='gpt3_navbar-links_logo mr-[2rem]'>
          <Image
            src='/assets/logo.svg'
            alt='logo'
            width='63'
            height='17'
            className='h-auto w-auto'
          />
        </div>
        <div className='gpt3__navbar-links_container hidden  lg:flex'>
          <p className='my-0 mx-[1rem] cursor-pointer  font-serif text-[18px] font-medium uppercase leading-[25px] text-white'>
            <a href='#home'>Home</a>
          </p>
          <p className='my-0 mx-[1rem] cursor-pointer  font-serif text-[18px] font-medium uppercase leading-[25px] text-white'>
            <a href='#wgpt3'>What is GPT3?</a>
          </p>
          <p className='my-0 mx-[1rem] cursor-pointer  font-serif text-[18px] font-medium uppercase leading-[25px] text-white'>
            <a href='#possibility'>Open AI</a>
          </p>
          <p className='my-0 mx-[1rem] cursor-pointer  font-serif text-[18px] font-medium uppercase leading-[25px] text-white'>
            <a href='#features'>Case Studies</a>
          </p>
          <p className='my-0 mx-[1rem] cursor-pointer  font-serif text-[18px] font-medium uppercase leading-[25px] text-white'>
            <a href='#blog'>Library</a>
          </p>
        </div>
      </div>
      <div className='gpt3__navbar-sign hidden items-center justify-end lg:flex'>
        <p className='my-0 mx-[1rem] cursor-pointer  font-mono text-[18px] font-medium uppercase leading-[25px] text-white'>
          Sign in
        </p>
        <button
          type='button'
          className='cursor-pointer rounded-[5px] border-none bg-orange py-2 px-4 font-mono text-[18px] font-medium uppercase leading-[25px] text-white outline-none'
        >
          Sign up
        </button>
      </div>
      <div className='gpt3_navbar-menu relative ml-4 lg:hidden'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center absolute right-0 top-[40px] my-1 mx-0 mt-0 flex  min-w-[210px] flex-col items-end justify-end rounded-[5px] bg-color_footer p-8 text-end shadow-bs'>
            <div className='gpt3__navbar-menu_container-links'>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                <Link href='#home'>Home</Link>
              </p>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                <Link href='#wgpt3'>What is GPT3?</Link>
              </p>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                <Link href='#possibility'>Open AI</Link>
              </p>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                <Link href='#features'>Case Studies</Link>
              </p>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                <Link href='#blog'>Library</Link>
              </p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign hidden'>
              <p className='my-2 mx-2 cursor-pointer font-mono  text-[18px] font-medium uppercase leading-[25px] text-white hover:text-orange'>
                Sign in
              </p>
              <button
                type='button'
                className='cursor-pointer rounded-[5px] border-none bg-orange py-2 px-4 font-mono text-[18px] font-medium leading-[25px] outline-none'
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

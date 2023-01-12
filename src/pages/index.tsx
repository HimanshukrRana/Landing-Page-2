import * as React from 'react';

import Seo from '@/components/atoms/seo/Seo';
import Layout from '@/components/layout/Layout';
import Blog from '@/components/molecules/Blog';
import Brand from '@/components/molecules/Brand';
import CTA from '@/components/molecules/CTA';
import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import MainFeatures from '@/components/molecules/MainFeatures';
import NavBar from '@/components/molecules/NavBar';
import Possibility from '@/components/molecules/Possibility';
import WhatGPT3 from '@/components/molecules/WhatGpt3';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !Guide: -> Select !Guide: and CMD + SHIFT + F
// Before you begin editing, follow all comments with `Guide`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className=' bg-gradient-to-r from-g1 to-g2'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <MainFeatures />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </Layout>
  );
}

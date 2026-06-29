'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import loaderAnimation from '../../public/assets/lottie/Animation -2.json';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-64 h-64">
        <Lottie animationData={loaderAnimation} loop autoPlay />
      </div>
    </div>
  );
};

export default Loader;
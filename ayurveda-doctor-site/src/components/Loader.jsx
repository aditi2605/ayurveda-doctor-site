'use client'

import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../public/assets/lottie/Animation -2.json'; 

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-64 h-64">
        <Lottie animationData={loaderAnimation} loop={true} autoPlay/>
      </div>
    </div>
  );
};

export default Loader;

import React from "react";

export default function Hero(){
    return(
        <>
        <div className="container">
    <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{backgroundImage: 'url(https://wallpapers.com/images/featured/jdm-aesthetic-yggqyl2azy9d5pqg.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">Hero</h1>
      <p className="mb-5 sm:mb-7 sm:text-lg">Hero is a component for displaying a large box or image with a title and description.</p>
      <button className="btn btn-ghost sm:btn-wide">Get Started</button>
    </div>
  </div>
  </div>
        </div>
        </>
    )
}
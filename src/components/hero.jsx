import React from "react";

export default function Hero(){
    return(
        <>
        <div className="container">
    <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{backgroundImage: 'url(https://wallpapers.com/images/featured/jdm-aesthetic-yggqyl2azy9d5pqg.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">Hero</h1>
      <p className="mb-5 sm:mb-7 sm:text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-ghost sm:btn-wide">Get Started</button>
    </div>
  </div>
  </div>
        </div>
        </>
    )
}
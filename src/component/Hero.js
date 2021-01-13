import React from 'react';


function Hero() {
  return (
    <section className="hero container">

      <img src="/images/illustration-working.svg" alt="working" className="workImg"></img>
      <div className="hero-text-wrap">
        <h1 className="my-1">More than just shorter links</h1>
        <p className="my-1">Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className="btn">Get Started</button>
      </div>

    </section>
  )
}

export default Hero;
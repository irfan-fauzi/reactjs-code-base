import React from 'react';
import '../css/Appsaya.css';
import Header from './Header';
import Hero from './Hero';
import Statistic from './statistic/Statistic';
import FootersHead from './FootersHead';
import Footer from './Footers';

function Appsaya() {
  return (
    <>
      <Header />
      <Hero />
      <Statistic />
      <FootersHead />
      <Footer />
    </>
  )
}

export default Appsaya;
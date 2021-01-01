import React from 'react';
import Cards from './Cards';
import Textwrap from './Textwrap';
import Form from './Form';

function Statistic() {
  return (
    <section className="statistic container">
      <Form />
      <Textwrap />
      <Cards />
    </section>
  )
}

export default Statistic;
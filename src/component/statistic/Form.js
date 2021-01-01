import React from 'react';

function Form() {
  return (
    <div className="form">
      <input type="text" className="input" placeholder="Shorten a link here"></input>
      <input type="button" value="shorten it!" className="btn"></input>
    </div>
  )
}

export default Form;
import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <h2 className='heading'>Subscribe our Newsletter</h2>
      <div className='form'>
        <input className="input-1" type='text' placeholder='Name:' />
        <input className='input-2' type='email' placeholder='Enter your Email'/>
        <span className='submit-button'>SEND</span>
      </div>
    </div>
  )
}

export default Subscribe

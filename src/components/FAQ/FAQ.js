import React from 'react'
import Accordian from './Accordian'
import './FAQ.css';

const FAQ = () => {
  return (
    <div className='faq-container'>
      <div className='faq-item'>
        <p className='header'>FAQ</p>
        <p className='para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
      <div className='accordian'>
        <Accordian />
      </div>
    </div>
  )
}

export default FAQ

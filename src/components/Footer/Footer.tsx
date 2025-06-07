'use client';
import React, { Component } from 'react';
import ImageRenderer from 'utils/imageRenderer/ImageRenderer';

export class Footer extends Component {
  render() {
    return (
      <footer className='px-4 py-8'>
        <div className='section-container relative'>
          <ImageRenderer src="/images/footer-logo.svg" alt="T&D logo" width={40} height={30} className={'table mx-auto md:absolute md:left-[50%] md:-translate-x-1/2'} />

          <div className='flex justify-between mt-4'>
            <span>Branding & Design by <a href='https://janesphere.com/' target='_blank' className='underline'>janesphere</a></span>
            <span>Developed by <a href='https://tichatin.com/' target='_blank' className='underline'>tichatin</a></span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
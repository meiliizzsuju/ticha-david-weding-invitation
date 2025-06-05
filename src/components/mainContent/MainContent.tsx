'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';
// import "../mainContent/mainContent.css";

function MainContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName') || 'Guest'; //http://localhost:3000/?guestName=Jane%20Jurairat

  return (
    <main className='content'>
      <section className='section hero-banner relative py-10 overflow-hidden'>
        <div className='section-container relative z-10'>
          <div className='hero-banner--box p-6'>
            <ImageRenderer src="/images/logo-TD-eng.svg" alt="Ticha & David logo" width={100} height={135} className={'mx-auto'} />

            <div className='hero-banner--heading text-center'>
              <div className='relative'>
                <span className='hero-banner--guest-name relative table mx-auto font-hand-writing block my-20 text-6xl md:text-8xl'>{guestName}
                  <ImageRenderer src="/images/flower-yellow.png" alt="Lovely guest" width={144} className={'mx-auto absolute -bottom-22 md:-bottom-16 right-1/3 md:-right-[25%]'} />
                </span>
              </div>
              <p className='text-3xl md:text-4xl'>You're Invited to</p>
              <ImageRenderer src="/images/logo-ticha-david-eng.svg" alt="Ticha & David" width={500} className={'block my-12 mx-auto p-10 md:p-0'} />
            </div>

            <div className='hero-banner--info md:flex md:justify-center my-20'>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center' href='/others/mywedding.ics' download="mywedding.ics">
                <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='hero-banner--heading-no block text-4xl leading-none'>24</span>
                <span className='text-2xl'>January 2026</span>
              </a>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center mt-6 md:mt-0'
                href='https://maps.app.goo.gl/5cDWsQYiatFXiQt26' target='_blank'>
                <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='text-2xl'>Cross Chiang Mai <br />Riverside Resort</span>
              </a>
            </div>
          </div>
        </div>
        <ImageRenderer src="/images/banner-flower-1.png" alt="Decor 1" width={420} className={'absolute top-0 right-0 w-xs md:w-xl'} />
        <ImageRenderer src="/images/banner-flower-2.png" alt="Decor 1" width={420} className={'absolute bottom-0 left-0 w-xs md:w-xl'} />
      </section>
    </main>
  )
}

export default MainContent
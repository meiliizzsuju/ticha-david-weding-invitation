'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';

function MainContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName') || 'Guest'; //http://localhost:3000/?guestName=Jane%20Jurairat

  return (
    <main className='content'>
      <section className='section hero-banner'>
        <div className='section-container'>
          <div className='hero-banner--box'>
            <ImageRenderer src="/images/logo-TD-eng.svg" alt="Ticha & David logo" width={100} height={135} className={'mx-auto'} />

            <div className='hero-banner--heading text-center'>
              <span className='hero-banner--guest-name'>{guestName}</span>
              <p className=''>You're Invited to</p>
              <ImageRenderer src="/images/logo-ticha-david-eng.svg" alt="Ticha & David" width={500} className={'mx-auto'} />
            </div>

            <div className='hero-banner--info'>
              <div className='hero-banner--info-item'>
                <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'mx-auto'} />
                <span>24</span>
                <span>January 2026</span>
              </div>
              <div className='hero-banner--info-item'>
                <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'mx-auto'} />
                <span>Cross Chiang Mai Riverside Resort</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContent
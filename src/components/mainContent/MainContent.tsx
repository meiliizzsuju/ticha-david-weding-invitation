'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';
// import "../mainContent/mainContent.css";

function MainContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName') || 'My lovely guest'; //http://localhost:3000/?guestName=Jane%20Jurairat


  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const weddingDate = new Date('2026-01-24T00:00:00');
      const timeDiff = weddingDate.getTime() - today.getTime();
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    calculateDaysLeft();

    // Optional: if you want it to update daily
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60); // every hour
    return () => clearInterval(interval);
  }, []);

  // tempfixlint
  const msg1 = "We're getting married in beautiful Chiang Mai, Thailand, and we'd be truly honoured to celebrate this special day with you.";
  const msg2 = "This isn't just a wedding—it's a gathering of the people we love most, in one of our favourite places. We understand that travelling from overseas is a big commitment, and while your presence would mean the world to us, we completely understand if you're unable to make the journey.";
  const msg3 = "Whether you're able to attend in person or join us in spirit from afar, we’re grateful to have you in our lives.";

  const heading1 = "Let’s get sentimental or silly!";

  return (
    <main className='content'>
      <section className='section hero-banner relative py-10 overflow-hidden'>
        <div className='section-container relative z-10'>
          <div className='hero-banner--box p-6'>
            <ImageRenderer src="/images/logo-TD-eng.svg" alt="Ticha & David logo" width={100} height={135} className={'mx-auto'} />

            <h1 className='hidden text-0'>Ticha & David&apos;s Wedding Invitation</h1>

            <div className='hero-banner--heading text-center'>
              <div className='relative'>
                <span className='hero-banner--guest-name relative table mx-auto font-hand-writing block my-20 mb-5 md:mb-20 text-6xl md:text-8xl'>{guestName}
                  <ImageRenderer src="/images/flower-yellow.png" alt="Lovely guest" width={144} className={'mx-auto mt-5 md:mt-0 md:absolute  md:-bottom-16 md:-right-[25%]'} />
                </span>
              </div>
              <p className='text-3xl md:text-4xl'>You&apos;re invited to</p>
              <ImageRenderer src="/images/logo-ticha-david-eng.svg" alt="Ticha & David" width={500} className={'block my-12 mx-auto p-10 md:p-0'} />
            </div>

            <div className='hero-banner--info text-center md:flex md:justify-center my-20'>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center' href='/others/mywedding.ics' download="mywedding.ics">
                <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='hero-banner--heading-no block text-4xl leading-none'>24</span>
                <span className='text-2xl'>January 2026</span>
              </a>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center block mt-6 md:mt-0'
                href='https://maps.app.goo.gl/5cDWsQYiatFXiQt26' target='_blank'>
                <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='text-2xl'>Cross Chiang Mai <br />Riverside Resort</span>
              </a>
            </div>
          </div>
        </div>
        <ImageRenderer src="/images/banner-flower-1.png" alt="Decor 1" width={420} className={'absolute top-0 right-0 w-1/2 lg:w-auto'} />
        <ImageRenderer src="/images/banner-flower-2.png" alt="Decor 2" width={420} className={'absolute bottom-0 left-0 w-1/2 lg:w-auto'} />
      </section>

      <section className='section about relative p-10 lg:py-20'>
        <div className='section-container'>
          <ImageRenderer src="/images/section2-flower-top.png" alt="Decor 3" width={144} className={'table mx-auto'} />
          <h2 className='text-center text-4xl md:text-6xl'>It&apos;s <span className='font-hand-writing text-8xl md:text-9xl'>{daysLeft !== null ? daysLeft : 'not many'}</span> Days from now</h2>

          <div className='lg:flex'>
            <div className='mt-10 lg:w-2/3 lg:pr-10'>
              <p className='my-1 text-xl'>{msg1}</p>
              <p className='my-2 text-[28px]'>{msg2}</p>
              <p className='my-1 text-xl'>{msg3}</p>
            </div>

            <div className='mt-10 lg:w-1/3'>
              <div className='table mx-auto relative'>
                <ImageRenderer src="/images/about.png" alt="Decor 3" width={220} className={'table mx-auto'} />
                <ImageRenderer src="/images/tish.png" alt="Tish" width={100} className={'absolute -bottom-[25px] -left-[70px]'} />
                <ImageRenderer src="/images/dave.png" alt="Dave" width={100} className={'absolute -top-[25px] -right-[75px]'} />
              </div>
            </div>
          </div>
        </div>
        <ImageRenderer src="/images/par-flower-1.png" alt="Decor 4" width={240} className={'w-[30%] lg:w-[240px] lg:absolute mt-20'} />
      </section>

      <section className='section relative p-10 lg:py-20'>
        <div className='section-container'>
          <h3 className='text-center text-4xl md:text-6xl'>{heading1}</h3>

        </div>
      </section>
    </main>
  )
}

export default MainContent
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';
import DynamicTable from 'utils/dynamicTable/DynamicTable';

function MainContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName') || 'My lovely guest';


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


  const giftmsg1 = "In some cultures, it’s customary to give a gift or money at weddings. We want to kindly let you know that:";
  const giftmsg2 = "Your presence is the only gift we need. Truly, we’re just so happy to celebrate with you—no need to bring anything but your smiles and good vibes.";
  const giftmsg3 = "We appreciate the time, effort, and cost it takes to travel, and we do not expect anything more.";

  const travelMsg = "We’re working on tips to help you plan your trip to Chiang Mai, including recommended places to stay and what to explore while you're here. Stay tuned!";

  const rsvpMsg1 = "To help us plan and make your experience as comfortable as possible, please let us know if you'll be joining us in Chiang Mai.";
  const rsvpMsg2 = "Kindly fill out the RSVP form — it only takes a minute!";

  const galMsg = "We'll upload our favorite moments here after the big day—check back soon!";

  const tableData = [
    ['tbc', 'coming soon'],
  ];

  const tableHeading = [
    "Time", "Event"
  ]

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
                <span className='hero-banner--heading-no block text-4xl leading-none'>24<sup>th</sup></span>
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
          <ImageRenderer src="/images/section2-flower-top.svg" alt="Decor 3" width={144} className={'table mx-auto w-[90px] md:w-[144]'} />
          <h2 className='text-center text-4xl md:text-6xl'>It&apos;s <span className='font-hand-writing text-8xl md:text-9xl'>{daysLeft !== null ? daysLeft : 'not many'}</span> days from now</h2>

          <div className='lg:flex'>
            <div className='mt-10 md:mt-15 lg:w-2/3 lg:pr-10'>
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

      <section className='section relative p-10 pb-40 lg:py-20 lg:pb-60'>
        <ImageRenderer src="/images/detail-heading-icon.png" alt="Wedding Details decor" width={144} className={'table mx-auto mb-3 w-[90px] md:w-[144]'} />
        <h3 className='text-center text-4xl md:text-5xl'>Wedding Details</h3>
        <div className='section-container'>
          <div className='mt-10 md:mt-15 max-w-90 mx-auto md:max-w-full md:flex md:items-center md:justify-around'>
            <a className='flex flex-row items-center md:pr-2' href='/others/mywedding.ics' download="mywedding.ics">
              <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <span className='text-xl'>24<sup>th</sup> January 2026</span>
                <span className='text-xs'>Click here to save the date!</span>
              </div>
            </a>
            <a className='flex flex-row items-center mt-6 md:mt-0 md:pr-2'
              href='https://maps.app.goo.gl/5cDWsQYiatFXiQt26' target='_blank'>
              <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <span className='text-xl leading-none'>Cross Chiang Mai <br />Riverside Resort</span>
                <span className='text-xs'>Click here to get the map</span>
              </div>
            </a>
            <div className='flex flex-row items-center mt-6 md:mt-0 md:pr-2'>
              <ImageRenderer src="/images/ico-dress.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <p className='text-xl leading-none'>Bring the best of you! <br />No colour them just be yourself.</p>
              </div>
            </div>
          </div>

          <div className='mt-10 md:mt-15 max-w-[570px] mx-auto'>
            <DynamicTable data={tableData} headings={tableHeading} />
          </div>
        </div>

        <ImageRenderer src="/images/par-flower-2.png" alt="Decor 5" width={180} className={'hidden lg:block absolute top-[50%]'} />
        <ImageRenderer src="/images/par-flower-3.png" alt="Decor 6" width={180} className={'absolute bottom-0 right-0'} />

      </section>


      <section className='section relative p-10 lg:py-20 '>
        <div className='section-container'>
          <div className='lg:flex'>
            <div className='lg:w-3/5 lg:order-2'>
              <h3 className='text-4xl md:text-5xl'>A Note on Gifts</h3>
              <div className='mt-10 md:mt-15 lg:pr-10'>
                <p className='my-1 text-xl'>{giftmsg1}</p>
                <p className='my-2 text-[28px] leading-[1.2]'>{giftmsg2}</p>
                <p className='my-1 text-xl'>{giftmsg3}</p>
              </div>
            </div>
            <div className='mt-10 lg:w-2/5 lg:order-1'>
              <div className='table mx-auto relative'>
                <ImageRenderer src="/images/img-gift.png" alt="Decor 7" width={220} className={'table mx-auto'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section relative p-10 md:pb-20 lg:py-20 lg:pb-40 '>
        <div className='section-container'>
          <ImageRenderer src="/images/travel-heading-icon.svg" alt="Travel & Accommodation decor" width={144} className={'table mx-auto w-[90px] md:w-[144]'} />
          <h3 className='text-center text-4xl md:text-5xl'>Travel & Accommodation</h3>
          <div className='mt-10 md:mt-15 relative'>
            <ImageRenderer src="/images/vector-luggage.svg" alt="Lugguage" width={670} className={'table mx-auto w-full max-w-[670px]'} />
            <p className='mt-10 md:absolute md:w-[290px] md:text-center md:p-5 md:top-[30%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>{travelMsg}</p>
          </div>
        </div>

        <ImageRenderer src="/images/par-travel-1.svg" alt="Travel image decor 1" width={180} className={'absolute top-[30%] md:top-[50%] left-[5%]'} />
        <ImageRenderer src="/images/par-travel-2.png" alt="Travel image decor 2" width={180} className={'hidden md:block absolute -bottom-[20px] md:w-[230px] right-0 lg:right-[5%]'} />
      </section>


      <section className='section relative p-10 lg:py-20 '>
        <div className='section-container'>
          <div className='lg:flex lg:items-center'>
            <div className='lg:w-2/5'>
              <h3 className='text-4xl md:text-5xl'>RSVP</h3>
              <div className='mt-10 md:mt-15 lg:pr-10'>
                <p className='my-1 text-xl'>{rsvpMsg1}</p>
                <p className='my-1 text-xl'>{rsvpMsg2}</p>
              </div>
            </div>
            <div className='mt-10 lg:w-3/5'>
              <div className='table mx-auto relative'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfW7wD7VF-gKww7BLKyC1-rs5kEiYv0ew5rtlEwh7WFL9_kUA/viewform?usp=header" target='_blank'
                  className='button'
                >
                  RSVP Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section relative p-10 lg:py-20 overflow-hidden'>
        <div className='section-container'>
          <h3 className='text-4xl md:text-5xl text-center'>Photo Gallery</h3>

          <div className='mt-10 md:mt-15 lg:pr-10'>
            <div className='relative'>
              <div className='relative'>
                <ImageRenderer src="/images/gal-img.png" alt="Photo gallery holder" width={1180} className={'w-full'} />
                <ImageRenderer src="/images/par-gal-img.png" alt="Photo gallery decor" width={198} className={'w-[20%] absolute bottom-0 -left-10'} />
              </div>
              <p className='mt-10 text-2xl md:absolute md:w-[300px] md:text-center md:p-5 md:top-[28%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-2'>{galMsg}</p>
            </div>
          </div>

          <ImageRenderer src="/images/gal-decor.svg" alt="Photo gallery decor" width={142} className={'ml-auto mt-20 md:mr-40'} />
        </div>
      </section>
    </main>
  )
}

export default MainContent
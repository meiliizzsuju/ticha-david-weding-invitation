'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';
import DynamicTable from 'utils/dynamicTable/DynamicTable';
import { useTranslations } from 'next-intl';


// The 'content' prop is no longer needed in the function signature
function MainContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName') || 'My lovely guest';
  const t = useTranslations('WeddingPage');

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

  return (
    <div className='content'>
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
              <p className='text-3xl md:text-4xl'>{t('PageContent.Banner.YouAreInvited')}</p>
              <ImageRenderer src="/images/logo-ticha-david-eng.svg" alt="Ticha & David" width={500} className={'block my-12 mx-auto p-10 md:p-0'} />
            </div>

            <div className='hero-banner--info text-center md:flex md:justify-center my-20'>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center' href='/others/mywedding.ics' download="mywedding.ics">
                <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='hero-banner--heading-no block text-4xl leading-none mt-4' dangerouslySetInnerHTML={{ __html: t.raw('PageContent.Banner.DateNumber') }}></span>
                <span className='text-2xl'>{t('PageContent.Banner.DateMMMMYYYY')}</span>
              </a>
              <a className='hero-banner--info-item w-full md:max-w-2xs text-center block mt-6 md:mt-0'
                href='https://maps.app.goo.gl/5cDWsQYiatFXiQt26' target='_blank'>
                <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'my-2 mx-auto'} />
                <span className='text-2xl mt-4' dangerouslySetInnerHTML={{ __html: t.raw('PageContent.Banner.Location') }}></span>
              </a>
            </div>
            <p className='text-center'>{t('PageContent.Banner.Remarkmsg1')}</p>
            <p className='text-center text-sm'>{t('PageContent.Banner.Remarkmsg2')}</p>
          </div>
        </div>
        <ImageRenderer src="/images/banner-flower-1.png" alt="Decor 1" width={420} className={'absolute top-0 right-0 w-1/2 lg:w-auto'} />
        <ImageRenderer src="/images/banner-flower-2.png" alt="Decor 2" width={420} className={'absolute bottom-0 left-0 w-1/2 lg:w-auto'} />
      </section>

      <section className='section about relative p-10 lg:py-20'>
        <div className='section-container'>
          <ImageRenderer src="/images/section2-flower-top.svg" alt="Decor 3" width={144} className={'table mx-auto w-[90px] md:w-[144]'} />
          <h2 className='text-center text-4xl md:text-6xl'>{t('PageContent.About.Title1')} <span className='font-hand-writing text-8xl md:text-9xl'>{daysLeft !== null ? daysLeft : 'not many'}</span> {t('PageContent.About.Title2')} </h2>

          <div className='lg:flex'>
            <div className='mt-10 md:mt-15 lg:w-2/3 lg:pr-10'>
              <p className='my-1 text-xl'>{t('PageContent.About.Message1')}</p>
              <p className='my-4 text-[28px]'>{t('PageContent.About.Message2')}</p>
              <p className='my-1 text-xl'>{t('PageContent.About.Message3')}</p>
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
        <h3 className='text-center text-4xl md:text-5xl'>{t('PageContent.Details.Title')}</h3>
        <div className='section-container'>
          <div className='mt-10 md:mt-15 max-w-90 mx-auto md:max-w-full md:flex md:items-center md:justify-around'>
            <a className='flex flex-row items-center md:pr-2' href='/others/mywedding.ics' download="mywedding.ics">
              <ImageRenderer src="/images/ico-date.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <span className='text-xl'>{t('PageContent.Details.FullDate')}</span>
                <span className='text-xs'>{t('PageContent.Details.DateClickCap')}</span>
              </div>
            </a>
            <a className='flex flex-row items-center mt-6 md:mt-0 md:pr-2'
              href='https://maps.app.goo.gl/5cDWsQYiatFXiQt26' target='_blank'>
              <ImageRenderer src="/images/ico-location.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <span className='text-xl leading-none' dangerouslySetInnerHTML={{ __html: t.raw('PageContent.Details.FullLocation') }}></span>
                <span className='text-xs'>{t('PageContent.Details.LoClickCap')}</span>
              </div>
            </a>
            <div className='flex flex-row items-center mt-6 md:mt-0 md:pr-2'>
              <ImageRenderer src="/images/ico-dress.svg" alt="Date" width={48} className={'grow-0 mr-4'} />
              <div className='flex flex-col'>
                <p className='text-xl leading-none' dangerouslySetInnerHTML={{ __html: t.raw('PageContent.Details.DressCodeMsg') }}></p>
              </div>
            </div>
          </div>

          <div className='mt-10 md:mt-15 max-w-[570px] mx-auto'>
            <DynamicTable
              data={t.raw('PageContent.Details.Table.Data')}
              headings={t.raw('PageContent.Details.Table.Heading')}
            />
          </div>
        </div>

        <ImageRenderer src="/images/par-flower-2.png" alt="Decor 5" width={180} className={'hidden lg:block absolute top-[50%]'} />
        <ImageRenderer src="/images/par-flower-3.png" alt="Decor 6" width={180} className={'absolute bottom-0 right-0'} />

      </section>


      <section className='section relative p-10 lg:py-20 '>
        <div className='section-container'>
          <div className='lg:flex'>
            <div className='lg:w-3/5 lg:order-2'>
              <h3 className='text-4xl md:text-5xl'>{t('PageContent.GiftSection.Title')}</h3>
              <div className='mt-10 md:mt-15 lg:pr-10'>
                <p className='my-1 text-xl'>{t('PageContent.GiftSection.Message1')}</p>
                <p className='my-4 text-[28px] leading-[1.2]'>{t('PageContent.GiftSection.Message2')}</p>
                <p className='my-1 text-xl'>{t('PageContent.GiftSection.Message3')}</p>
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
          <h3 className='text-center text-4xl md:text-5xl'>{t('PageContent.TravelAccom.Title')}</h3>
          <div className='mt-10 md:mt-15 relative'>
            <ImageRenderer src="/images/vector-luggage.svg" alt="Lugguage" width={670} className={'table mx-auto w-full max-w-[670px]'} />
            <p className='mt-10 md:absolute md:w-[290px] md:text-center md:p-5 md:top-[30%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>{t('PageContent.TravelAccom.Message1')}</p>
          </div>
        </div>

        <ImageRenderer src="/images/par-travel-1.svg" alt="Travel image decor 1" width={180} className={'absolute top-[30%] md:top-[50%] left-[5%]'} />
        <ImageRenderer src="/images/par-travel-2.png" alt="Travel image decor 2" width={180} className={'hidden md:block absolute -bottom-[20px] md:w-[230px] right-0 lg:right-[5%]'} />
      </section>


      <section className='section relative p-10 lg:py-20 '>
        <div className='section-container'>
          <div className='lg:flex lg:items-center'>
            <div className='lg:w-2/5'>
              <h3 className='text-4xl md:text-5xl'>{t('PageContent.Rsvp.Title')}</h3>
              <div className='mt-10 md:mt-15 lg:pr-10'>
                <p className='my-1 text-xl'>{t('PageContent.Rsvp.Message1')}</p>
                <p className='my-1 text-xl'>{t('PageContent.Rsvp.Message2')}</p>
              </div>
            </div>
            <div className='mt-10 lg:w-3/5'>
              <div className='table mx-auto relative'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfW7wD7VF-gKww7BLKyC1-rs5kEiYv0ew5rtlEwh7WFL9_kUA/viewform?usp=header" target='_blank'
                  className='button'
                >
                  {t('PageContent.Rsvp.ButtonLabel')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section relative p-10 lg:py-20 overflow-hidden'>
        <div className='section-container'>
          <h3 className='text-4xl md:text-5xl text-center'>{t('PageContent.Gallery.Title')}</h3>

          <div className='mt-10 md:mt-15 lg:pr-10'>
            <div className='relative'>
              <div className='relative'>
                <ImageRenderer src="/images/gal-img.png" alt="Photo gallery holder" width={1180} className={'w-full'} />
                <ImageRenderer src="/images/par-gal-img.png" alt="Photo gallery decor" width={198} className={'w-[20%] absolute bottom-0 -left-10'} />
              </div>
              <p className='mt-10 text-2xl md:absolute md:w-[300px] md:text-center md:p-5 md:top-[28%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-2'>{t('PageContent.Gallery.Message1')}</p>
            </div>
          </div>

          <ImageRenderer src="/images/gal-decor.svg" alt="Photo gallery decor" width={142} className={'ml-auto mt-20 md:mr-40'} />
        </div>
      </section>
    </div>
  )
}

export default MainContent
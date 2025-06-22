import { Suspense } from 'react';
import Header from '../../../components/Header/Header';
import MainContent from '../../../components/mainContent/MainContent';
import type { Metadata } from 'next';
import Footer from '../../../components/Footer/Footer';
import { useTranslations } from 'next-intl';
import enContent from '../../../messages/en.json';

export const metadata: Metadata = {
  title: "Ticha & David's Wedding Invitation",
  description: "You're invited to our wedding in Chiang Mai, Thailand!",
  openGraph: {
    title: "Ticha & David's Wedding Invitation",
    description: "You're invited to our wedding in Chiang Mai, Thailand!",
    url: "https://tichatin.com/wedding",
    type: "website",
    images: [
      {
        url: "https://tichatin.com/images/logo-ticha-david-eng.svg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Ticha & David Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticha & David's Wedding Invitation",
    description: "You're invited to our wedding in Chiang Mai, Thailand!",
    images: ["https://tichatin.com/images/logo-ticha-david-eng.svg"],
  },
};

export default function WeddingLanding() {
  const t = useTranslations("WeddingPage");
  const content = {
    banner: {
      YouAreInvited: t('PageContent.Banner.YouAreInvited'),
      DateNumber: t.raw('PageContent.Banner.DateNumber'),
      DateMMMMYYYY: t('PageContent.Banner.DateMMMMYYYY'),
      Location: t.raw('PageContent.Banner.Location'),
    },
    about: {
      title1: t('PageContent.About.Title1'),
      title2: t('PageContent.About.Title2'),
      msg1: t('PageContent.About.Message1'),
      msg2: t('PageContent.About.Message2'),
      msg3: t('PageContent.About.Message3'),
    },
    details: {
      titile: t('PageContent.Details.Title'),
      fullDate: t('PageContent.Details.FullDate'),
      dateClickCap: t('PageContent.Details.DateClickCap'),
      fullLocation: t.raw('PageContent.Details.FullLocation'),
      loClickCap: t('PageContent.Details.LoClickCap'),
      dressCodeMsg: t.raw('PageContent.Details.DressCodeMsg'),
      table: {
        heading: t.raw('PageContent.Details.Table.Heading') as string[],
        rows: t.raw('PageContent.Details.Table.Data') as string[][],
      },
    },
    giftSec: {
      title: t('PageContent.GiftSection.Title'),
      msg1: t('PageContent.GiftSection.Message1'),
      msg2: t('PageContent.GiftSection.Message2'),
      msg3: t('PageContent.GiftSection.Message3'),
    },
    travelAccom: {
      title: t('PageContent.TravelAccom.Title'),
      msg1: t('PageContent.TravelAccom.Message1'),
    },
    rsvp: {
      title: t('PageContent.Rsvp.Title'),
      msg1: t('PageContent.Rsvp.Message1'),
      msg2: t('PageContent.Rsvp.Message2'),
      btnLabel: t('PageContent.Rsvp.ButtonLabel'),
    },
    gallery: {
      title: t('PageContent.Gallery.Title'),
      msg1: t('PageContent.Gallery.Message1'),
    }
  };


  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent content={content} />
      </Suspense>
      <Footer />
    </div>
  );
}

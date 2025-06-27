import { Suspense } from 'react';
import Header from '../../../components/Header/Header';
import MainContent from '../../../components/mainContent/MainContent';
import type { Metadata } from 'next';
import Footer from '../../../components/Footer/Footer';

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

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
      <Footer />
    </div>
  );
}

import { Suspense } from 'react';
import Header from '../../components/Header/Header';
import MainContent from '../../components/mainContent/MainContent';

export default function WeddingLanding() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
    </div>
  );
}

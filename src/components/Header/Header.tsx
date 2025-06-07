'use client';

import React, { useState } from 'react';
import { DropdownComponent } from '../../utils/downdown/drowndown';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const options = [
    { label: 'English', href: '/', onSelect: () => setSelectedLanguage('EN') },
    { label: 'Thai', href: '/th', onSelect: () => setSelectedLanguage('TH') },
    { label: 'Korean', href: '/kr', onSelect: () => setSelectedLanguage('KR') },
  ];


  return (
    <header className="flex items-center justify-between p-4 md:px-10 fixed z-20">
      <div className='section-container'>
        <div className='lang-container flex'>
          <ImageRenderer src="/images/icon-lang.svg" alt="SVG Logo" width={20} height={20} />
          <DropdownComponent
            buttonLabel={selectedLanguage}
            options={options}
            styling={{ optionsAlign: 'left', menuButtonClasses: 'inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

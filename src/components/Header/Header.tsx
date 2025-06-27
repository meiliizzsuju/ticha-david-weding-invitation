'use client';

import React, { useState } from 'react';
import { LocaleDropdownComponent } from '../../utils/LocaleDrowndown/LocaleDrowndown';
import ImageRenderer from '../../utils/imageRenderer/ImageRenderer';

const Header: React.FC = () => {
  const [selectedLanguage] = useState('EN');

  const options = [
    { label: 'English', lang: 'en' },
    { label: 'ภาษาไทย', lang: 'th' },
    { label: '한국어', lang: 'kr' },
  ];


  return (
    <header className="flex items-center justify-between p-4 md:px-10 fixed z-20">
      <div className='section-container'>
        <div className='lang-container flex'>
          <ImageRenderer src="/images/icon-lang.svg" alt="SVG Logo" width={20} height={20} />
          <LocaleDropdownComponent
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

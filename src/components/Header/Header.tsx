'use client';

import React, { useState } from 'react';
import { DropdownComponent } from '../../utils/downdown/drowndown';

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Eng');

  const options = [
    { label: 'English', href: '/', onSelect: () => setSelectedLanguage('Eng') },
    { label: 'Thai', href: '/th', onSelect: () => setSelectedLanguage('TH') },
    { label: 'Korean', href: '/kr', onSelect: () => setSelectedLanguage('KR') },
  ];

  // We will modify DropdownComponent so it calls onSelect when clicking option

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <DropdownComponent
        buttonLabel={selectedLanguage}
        options={options}
        styling={{ optionsAlign: 'left' }}
      />
    </header>
  );
};

export default Header;

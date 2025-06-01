'use client';

import React from 'react'
import {DropdownComponent} from '../../utils/downdown/drowndown' 

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">My App</h1>
      <DropdownComponent
        buttonLabel="Language"
        options={[
          { label: 'English', href: '/' },
          { label: 'Thai', href: '/th' },
          { label: 'Korean', href: '/kr' },
        ]}
      />
    </header>
  )
}

export default Header

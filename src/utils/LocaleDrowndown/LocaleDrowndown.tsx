'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

export interface DropdownOption {
  label: string;
  lang: string;
}

export interface DropdownStyle {
  optionsAlign: string;
  menuButtonClasses?: string;
}

export interface DropdownOptions {
  buttonLabel: string;
  options: DropdownOption[];
  styling: DropdownStyle;
}

export const LocaleDropdownComponent: React.FC<DropdownOptions> = ({
  buttonLabel,
  options,
  styling,
}) => {
  const alignmentClass =
    styling.optionsAlign === 'left'
      ? 'left-0 origin-top-left'
      : 'right-0 origin-top-right';

  const menuButtonCss = styling.menuButtonClasses?.trim()
    ? styling.menuButtonClasses
    : 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50';

  const router = useRouter(); // ✅ from next/navigation
  const pathname = usePathname(); // ✅ full path string
  const currentLocale = useLocale(); // ✅ current locale from next-intl

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace current locale
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={menuButtonCss}>
          {buttonLabel}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </Menu.Button>
      </div>

      <Menu.Items
        className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${alignmentClass}`}
      >
        <div className="py-1">
          {options.map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => changeLocale(option.lang)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100 text-gray-900' : ''
                    }`}
                  lang={option.lang}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

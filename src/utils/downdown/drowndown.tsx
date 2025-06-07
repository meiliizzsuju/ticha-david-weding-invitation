// DropdownComponent.tsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

export interface DropdownOption {
  label: string
  href?: string
  onClick?: () => void
  lang?: string
}
export interface DropdownStyle {
  optionsAlign: string,
  menuButtonClasses?: string;
}

export interface DropdownOptions {
  buttonLabel: string
  options: DropdownOption[]
  styling: DropdownStyle
}


export const DropdownComponent: React.FC<DropdownOptions> = ({ buttonLabel, options, styling }) => {
  const alignmentClass = styling.optionsAlign === 'left'
    ? 'left-0 origin-top-left'
    : 'right-0 origin-top-right';
  const menuButtonCss = styling.menuButtonClasses?.trim()
    ? styling.menuButtonClasses
    : 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50';

  const [locale, setLocale] = useState<string>("");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`${menuButtonCss}`}>
          {buttonLabel}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${alignmentClass}`}
      >
        <div className="py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {({ active }) =>
                option.href ? (
                  <a
                    href={option.href}
                    className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100 text-gray-900' : ''
                      }`}
                  >
                    {option.label}
                  </a>
                ) : (
                  <button
                    onClick={option.onClick}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100 text-gray-900' : ''
                      }`}
                    lang={option.lang}
                  >
                    {option.label}
                  </button>
                )
              }
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}

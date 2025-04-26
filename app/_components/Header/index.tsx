'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/favorites', label: 'Favorites' },
  ];

  return (
    <nav className="bg-[#780c0c] shadow-sm mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-white  bg-[#500f0fc2] font-semibold'
                    : 'text-white'
                } h-full flex items-center p-2 no-underline rounded-md hover:bg-[#500f0fc2] `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default React.memo(Navbar)



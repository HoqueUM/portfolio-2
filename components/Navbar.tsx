"use client"
// import React, { useState } from 'react';
import Link from 'next/link';
// import { Menu, X } from 'lucide-react';

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/projects/', text: 'Projects' },
    // { href: '/writing/', text: 'Writing' },
    // { href: '/videos/', text: 'Videos' },
    // { href: '/contact/', text: 'Contact' }
  ];

  return (
    <nav className="w-full top-0 z-50 p-4">
      <div className="flex justify-between static right-0 sm:top-3 md:top-4 lg:top-5 xl:top-6 2xl:top-7 left-0">
        <div className="flex justify-end space-x-6 font-mono">
          {navLinks.map(({ href, text }) => (
            <Link 
              key={href} 
              href={href}
              className="hover:text-gray-600 transition-colors"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
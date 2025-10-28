'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const changeLang = (lang: string) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  const leftLinks = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Productos', href: '/productos' },
  ];

  const rightLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];
  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 h-24 transition-all duration-300 ${
          isScrolled ? 'bg-[#e4bead]/95 shadow-lg backdrop-blur-md' : 'bg-[#e4bead]'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Left Links - Desktop */}
            <div className="hidden flex-1 items-center space-x-8 lg:flex lg:justify-end">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-fredoka text-essence-mauve hover:text-essence-cream text-xl tracking-wide uppercase transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Logo - Centered */}
            <div className="flex-shrink-0 lg:mx-8">
              <Link href="/" className="block">
                <div className="relative z-50">
                  <div className="flex translate-y-5 transform items-center justify-center rounded-full shadow-xl transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/logo.webp"
                      alt="logo"
                      width={100}
                      height={100}
                      className="z-50 rounded-full"
                    />
                    {/* <span className="text-lg font-light tracking-wider text-essence-cream lg:text-xl">
                      EB
                    </span> */}
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Links + Actions - Desktop */}
            <div className="hidden flex-1 items-center justify-end space-x-8 lg:flex lg:justify-start">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-fredoka text-essence-mauve hover:text-essence-cream text-xl tracking-wide uppercase transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex w-full justify-end gap-3">
                {/* Language Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleLang}
                    className="text-essence-mauve hover:text-essence-cream flex items-center justify-center space-x-1 transition-colors duration-300"
                    aria-label="Cambiar idioma"
                  >
                    <span className="font-fredoka text-sm font-light">{currentLang}</span>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isLangOpen && (
                    <div className="border-essence-rose/20 absolute right-0 mt-2 w-32 rounded-lg border bg-white py-2 shadow-xl">
                      <button
                        onClick={() => changeLang('ES')}
                        className="text-essence-mauve hover:bg-essence-cream w-full px-4 py-2 text-left text-sm transition-colors"
                      >
                        Español
                      </button>
                      <button
                        onClick={() => changeLang('EN')}
                        className="text-essence-mauve hover:bg-essence-cream w-full px-4 py-2 text-left text-sm transition-colors"
                      >
                        English
                      </button>
                    </div>
                  )}
                </div>

                {/* Cart Icon */}
                <a
                  href="/carrito"
                  className="text-essence-mauve hover:text-essence-cream relative transition-colors duration-300"
                  aria-label="Carrito de compras"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="bg-essence-peach absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                    2
                  </span>
                </a>

                {/* User Icon */}
                <a
                  href="/login"
                  className="text-essence-mauve hover:text-essence-cream transition-colors duration-300"
                  aria-label="Iniciar sesión"
                >
                  <User className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button + Icons */}
            <div className="flex h-24 items-center space-x-4 lg:hidden">
              <a
                href="/carrito"
                className="text-essence-mauve hover:text-essence-peach relative transition-colors duration-300"
                aria-label="Carrito de compras"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="bg-essence-peach absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                  2
                </span>
              </a>

              <button
                onClick={toggleMenu}
                className="text-essence-mauve hover:text-essence-peach transition-colors duration-300"
                aria-label="Menú"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`font-fredoka z-10 overflow-hidden transition-all duration-500 ease-in lg:hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-essence-cream border-essence-rose/30 space-y-4 border-t px-4 pt-4 pb-8">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-essence-mauve hover:text-essence-peach block w-full py-2 text-right text-base font-light tracking-wide uppercase transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="border-essence-rose/30 flex flex-col items-end space-y-4 border-t pt-4">
              <a
                href="/login"
                className="text-essence-mauve hover:text-essence-peach flex items-center space-x-2 py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span className="text-base font-light tracking-wide uppercase">Login</span>
              </a>

              <div className="flex flex-col py-2">
                <span className="text-essence-mauve mb-2 text-right text-sm font-light tracking-wide uppercase">
                  Idioma
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => changeLang('ES')}
                    className={`rounded-full px-3 py-1 text-sm transition-all duration-300 ${
                      currentLang === 'ES'
                        ? 'bg-essence-peach text-white'
                        : 'text-essence-mauve hover:bg-essence-rose bg-white'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => changeLang('EN')}
                    className={`rounded-full px-3 py-1 text-sm transition-all duration-300 ${
                      currentLang === 'EN'
                        ? 'bg-essence-peach text-white'
                        : 'text-essence-mauve hover:bg-essence-rose bg-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 lg:h-20"></div>
    </>
  );
};

export default Navbar;

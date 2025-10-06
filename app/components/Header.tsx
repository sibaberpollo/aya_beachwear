'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Top Bar */}
        <div className={styles.headerTop}>
          <div className="container">
            <div className={styles.topRow}>
              <div className={styles.socialBlock}>
                <ul className={styles.socialList}>
                  <li>
                    <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Instagram" target="_blank" rel="noopener noreferrer">
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.promo}>
                <p>FREE SHIPPING THIS WEEK ON ORDER OVER 75$</p>
              </div>
            </div>

            <div className={styles.mainRow}>
              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuBtn}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <span className={styles.hamburger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              {/* Logo */}
              <div className={styles.logo}>
                <a href="/">
                  <Image
                    src="/images/logo.jpg"
                    alt="Aya Beachwear"
                    width={150}
                    height={50}
                    priority
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/pages">Pages</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>

              {/* Right Actions */}
              <div className={styles.actions}>
                <button className={styles.searchBtn} aria-label="Search">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
                <a href="/account" className={styles.accountBtn} aria-label="Account">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </a>
                <a href="/wishlist" className={styles.wishlistBtn} aria-label="Wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className={styles.badge}>0</span>
                </a>
                <a href="/cart" className={styles.cartBtn} aria-label="Cart">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span className={styles.badge}>0</span>
                  <span className={styles.price}>$0.00</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Off-Canvas Mobile Menu */}
      <div className={`${styles.offCanvasOverlay} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu}></div>
      <div className={`${styles.offCanvasMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.offCanvasHeader}>
          <h2>Menu</h2>
          <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <ul>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/pages" onClick={closeMenu}>Pages</a></li>
            <li><a href="/blog" onClick={closeMenu}>Blog</a></li>
            <li><a href="/shop" onClick={closeMenu}>Shop</a></li>
            <li><a href="/portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
        <div className={styles.mobileMenuFooter}>
          <div className={styles.mobileSocial}>
            <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

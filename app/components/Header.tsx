'use client';

import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
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

              {/* Navigation */}
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
    </header>
  );
}

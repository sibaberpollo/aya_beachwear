import Image from 'next/image';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={styles.main}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className="container">
          <div className={styles.bannerGrid}>
            <div className={styles.bannerItem}>
              <div className={styles.bannerImage}>
                <Image
                  src="/images/leo_vogaza_banner1_h2.jpg"
                  alt="Spring Summer 2020"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.bannerText}>
                  <p>Spring —</p>
                  <p>Summer 2020</p>
                </div>
              </div>
            </div>
            <div className={styles.bannerItem}>
              <div className={styles.bannerImage}>
                <Image
                  src="/images/leo_vogaza_banner2_h2.jpg"
                  alt="Feels Like Nothing"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.bannerText}>
                  <h3>— Feels Like Nothing</h3>
                  <p>A gorgeous variety of colors and types is presented in the online store you&apos;re presently in. Dive into the variety of swimwear choices right now.</p>
                  <a href="/shop" className="btn-primary">
                    shop now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>New Arrivals</h2>
            <p className={styles.sectionSubtitle}>Vibrant colors, one-of-a-kind fabrics and intricate details</p>
          </div>
          <div className={styles.productsGrid}>
            {/* Product cards would go here */}
          </div>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className={styles.fullBanner}>
        <div className={styles.fullBannerImage}>
          <Image
            src="/images/leo_vogaza_banner3_h2.jpg"
            alt="About Us"
            width={1920}
            height={600}
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.fullBannerText}>
            <h3>They say &quot;what happens on holiday, stays on holiday&quot;, but not with vogaza</h3>
            <a href="/about" className="btn-primary">
              ABOUT US
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h3>Worldwide Delivery</h3>
              <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget</p>
            </div>
            <div className={styles.featureItem}>
              <h3>100% Money Back</h3>
              <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Secure Payment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className={styles.bestSellersSection}>
        <div className="container">
          <div className={styles.bestSellersGrid}>
            <div className={styles.bestSellersImage}>
              <Image
                src="/images/leo_vogaza_banner4_h2.jpg"
                alt="Best Sellers"
                width={700}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.bestSellersContent}>
              <h2 className={styles.sectionTitle}>Best Sellers</h2>
              <p className={styles.sectionSubtitle}>Vibrant colors, one-of-a-kind fabrics and intricate details</p>
              {/* Best seller products would go here */}
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>First time Vituna babe? Start here</h3>
            <p>Can&apos;t decide product is your perfect match? we&apos;ve created the ultimate guide to help you find your glow.</p>
            <a href="/guide" className="btn-primary">
              find my glow
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className={styles.instagramSection}>
        <div className="container">
          <p className={styles.instagramTitle}>Follow us @Vogaza_official</p>
          {/* Instagram feed would go here */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Newsletter Signup</h2>
          {/* Newsletter form would go here */}
        </div>
      </section>
    </main>
  );
}

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './HeroSlider.module.css';

export default function HeroSlider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              src="/images/leo_vogaza_slideshow1_h1.jpg"
              alt="Spring Summer Collection"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

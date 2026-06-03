import React, { ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import styles from './docs.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

type ScreenshotSlide = {
  src: string;
  alt: string;
  title?: string;
  caption?: ReactNode;
};

type ScreenshotSlideshowProps = {
  items: ScreenshotSlide[];
  title?: string;
  eyebrow?: string;
  badge?: string;
  autoplayDelay?: number;
};

const ScreenshotSlideshow = ({
  items,
  title,
  eyebrow,
  badge,
  autoplayDelay = 3500,
}: ScreenshotSlideshowProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.screenshotFrame}>
      {(title || eyebrow || badge) ? (
        <div className={styles.screenshotHeader}>
          <div className={styles.screenshotHeaderMain}>
            {eyebrow ? (
              <span className={styles.screenshotEyebrow}>{eyebrow}</span>
            ) : null}
            {title ? <h3 className={styles.screenshotTitle}>{title}</h3> : null}
          </div>
          {badge ? <span className={styles.screenshotBadge}>{badge}</span> : null}
        </div>
      ) : null}
      <div className={styles.slideshowMain}>
        <Swiper
          className={styles.slideshowSwiper}
          modules={[Autoplay, Navigation, Thumbs]}
          navigation
          loop={items.length > 1}
          autoplay={
            items.length > 1
              ? {
                  delay: autoplayDelay,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }
              : false
          }
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={`${item.alt}-${index}`}>
              <div className={styles.slideshowSlide}>
                <img className={styles.screenshotImage} src={item.src} alt={item.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {items.length > 1 ? (
        <div className={styles.slideshowThumbs}>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={Math.min(items.length, 4)}
            spaceBetween={12}
            watchSlidesProgress
            modules={[Thumbs]}
          >
            {items.map((item, index) => (
              <SwiperSlide
                className={styles.slideshowThumbSlide}
                key={`${item.alt}-thumb-${index}`}
              >
                <img className={styles.screenshotImage} src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
      {items[activeIndex] && (items[activeIndex].title || items[activeIndex].caption) ? (
        <div className={styles.slideshowMeta}>
          {items[activeIndex].title ? (
            <h4 className={styles.slideshowMetaTitle}>{items[activeIndex].title}</h4>
          ) : null}
          {items[activeIndex].caption ? (
            <div className={styles.slideshowMetaCaption}>{items[activeIndex].caption}</div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default ScreenshotSlideshow;

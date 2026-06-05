import React, { Children, FC, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const FeatureItemHorizontal = (props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageGallery =
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': 'var(--color-primary)',
            '--swiper-pagination-color': 'var(--color-primary)',
          }}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true
          }}
          thumbs={{ swiper: thumbsSwiper, slideThumbActiveClass: 'slide-thumb-active' }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {props.images.map(image => {
            return (
              <SwiperSlide key={image.src}>
                <div className="homepage-media-frame homepage-gallery-frame">
                  <img className="d-block w-100 mt-2 mb-2 homepage-gallery-image" src={image.src} alt={image.alt}/>
                </div>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper"
        >
          {props.images.map(image => {
            return (
              <SwiperSlide key={`${image.src}-thumb`}>
                <div className="homepage-thumb-frame">
                  <img className="d-block w-100 mt-2 mb-2 homepage-gallery-thumb" src={image.src} alt={image.alt}/>
                </div>
              </SwiperSlide>
            )
            })
          }
        </Swiper>
      </>

  return (<>
      <section className="elements-area section-padding-50 homepage-feature-showcase">
        <div className="container">
          <div className="row homepage-feature-row">
            <div className="col-md-4 col-12">
              <div className="single-service-area homepage-feature-copy">
                <h2 className={"feature-hz-number"}>{props.featureNumber}</h2>
                <h4 className={"feature-hz-title"}>{props.title}</h4>
                {props.children}
              </div>
            </div>
            <div className="col-md-8">
              {imageGallery}
            </div>
          </div>
          <div className="homepage-section-divider"></div>
        </div>
      </section>
    </>
  )

}

export default FeatureItemHorizontal;

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
              <SwiperSlide>
                <img className="d-block w-100 mt-2 mb-2" src={image.src} alt={image.alt}/>
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
              <SwiperSlide>
                <img className="d-block w-100 mt-2 mb-2" src={image.src} alt={image.alt}/>
              </SwiperSlide>
            )
            })
          }
        </Swiper>
      </>

  return (<>
      <section className="elements-area section-padding-50">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single-service-area">
                <h2 className={"feature-hz-number"}>{props.featureNumber}</h2>
                <h4 className={"feature-hz-title"}>{props.title}</h4>
                {props.children}
              </div>
            </div>
            <div className="col-md-8">
              {imageGallery}
            </div>
          </div>
          <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
        </div>
      </section>
    </>
  )

}

export default FeatureItemHorizontal;


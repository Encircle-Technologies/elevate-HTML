const initSliders = () => {
  const initNavSlider = () => {
    const navSliderEl = document.querySelector('.nav-slider');
    if (!navSliderEl) return;

    new Swiper('.nav-slider', {
      slidesPerView: 1,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".nav-slider-pagination",
        clickable: true,
      },
    });
  };
  const initCardSlider = () => {
    const cardSliderEl = document.querySelector('.card-slider');
    if (!cardSliderEl) return;

    new Swiper('.card-slider', {
      spaceBetween: 20,
      speed: 500,
      navigation: {
        nextEl: ".card-slider-pagination .next",
        prevEl: ".card-slider-pagination .previous",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          centeredSlides: true,
          spaceBetween: 12,
          loop: true,
          allowTouchMove: true,
          autoplay: {
            delay: 2500,
          },
        },
        375: {
          slidesPerView: 1.3,
          centeredSlides: true,
          spaceBetween: 16,
          loop: true,
          allowTouchMove: true,
          autoplay: {
            delay: 2500,
          },
        },
        640: {
          slidesPerView: 2.8,
          centeredSlides: true,
          spaceBetween: 20,
          loop: true,
          allowTouchMove: true,
          autoplay: {
            delay: 2500,
          },
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 24,
          loop: true,
          allowTouchMove: true,
          autoplay: {
            delay: 2500,
          },
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 28,
          loop: true,
          allowTouchMove: true,
          autoplay: {
            delay: 2500,
          },
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 28,
          centeredSlides: false,
          loop: false,
          autoplay: false,
        }
      }
    });
  };

  const initPricingSlider = () => {
    const cardSliderEl = document.querySelector('.pricing-slider');
    if (!cardSliderEl) return;

    new Swiper('.pricing-slider', {
      spaceBetween: 20,
      speed: 500,
      navigation: {
        nextEl: ".card-slider-pagination .next",
        prevEl: ".card-slider-pagination .previous",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 12,
          loop: true,
          allowTouchMove: true,
        },
        375: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 16,
          loop: true,
          allowTouchMove: true,
        },
        640: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 20,
          loop: true,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 24,
          loop: true,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 28,
          loop: false,
        },
      }
    });
  };

  const initTestimonialSlider = () => {
    const cardSliderEl = document.querySelector('.testimonial-slider');
    if (!cardSliderEl) return;

    new Swiper('.testimonial-slider', {
      spaceBetween: 20,
      speed: 600,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".testimonial-slider-pagination .next",
        prevEl: ".testimonial-slider-pagination .previous",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },
        375: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        1200: {
          slidesPerView: 2.1,
          spaceBetween: 28,
        }
      }
    });
  };

  const initHeroSlider = () => {
    const heroSliderEl = document.querySelector('.hero-slider');
    if (!heroSliderEl) return;

    new Swiper('.hero-slider', {
      loop: true,
      speed: 800,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      effect: 'fade',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
  };

  initNavSlider();
  initCardSlider();
  initPricingSlider();
  initTestimonialSlider();
  initHeroSlider();
};

export default initSliders;
import "./index.scss";
import Swiper from "swiper/bundle";

const initializeSwiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const updateSwiperSettings = () => {
    if (window.innerWidth < 768) {
      swiper.params.slidesPerView = 1;
    } else if (window.innerWidth < 1024) {
      swiper.params.slidesPerView = 2;
    } else {
      swiper.params.slidesPerView = 3;
    }
    swiper.update();
  };

  updateSwiperSettings();

  window.addEventListener("resize", updateSwiperSettings);
};

document.addEventListener("DOMContentLoaded", () => {
  initializeSwiper();
});

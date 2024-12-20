import "./index.scss";
import Swiper from "swiper/bundle";
document.addEventListener("DOMContentLoaded", () => {
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
});

function numberWithZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

const galleryComponent = document.querySelectorAll(".slider-gallery_component");

galleryComponent.forEach((element) => {
  let totalSlides = numberWithZero(
    element.querySelectorAll(".swiper-slide.is-slider-thumbs").length
  );

  element.querySelector(".swiper-number-total").textContent = totalSlides;

  const bgSwiper = new Swiper(element.querySelector(".swiper.is-slider-bg"), {
    slidesPerView: 1,
    speed: 400,
    effect: "fade",
    allowTouchMove: false,
  });

  const thumbsSwiper = new Swiper(
    element.querySelector(".swiper.is-slider-thumbs"),
    {
      slidesPerView: 1,
      speed: 600,
      loop: true,
      loopedSlides: 8,
      slideToClickedSlide: true,
    }
  );

  const textSwiper = new Swiper(
    element.querySelector(".swiper.is-slider-titles"),
    {
      slidesPerView: "auto",
      speed: 600,
      loop: true,
      loopedSlides: 8,
      slideToClickedSlide: true,
      mousewheel: true,
      keyboard: true,
      centeredSlides: true,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      thumbs: {
        swiper: bgSwiper,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    }
  );

  textSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = textSwiper;

  textSwiper.on("slideChange", function (e) {
    let slideNumber = numberWithZero(e.realIndex + 1);
    element.querySelector(".swiper-number-current").textContent = slideNumber;
  });
});

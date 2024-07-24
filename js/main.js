"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger"),
    wrapper = document.querySelector(".wrapper"),
    burgerLine = document.querySelector(".header__burger-line"),
    overlay = document.querySelector(".header__nav-list"),
    noScroll = document.querySelector(".html"),
    btn = document.querySelectorAll(".btn"),
    nonActive = document.querySelectorAll(".disable-link"),
    link = document.querySelectorAll("a.anchor-link"),
    disablelink = (constName) => {
      constName.forEach((d) => {
        d.addEventListener("click", (e) => {
          e.preventDefault();
        });
      });
    },
    intClass = (constName, action, className) => {
      constName.classList[action](className);
    },
    testimoinialsSlider = new Swiper(".testimonials__slider", {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".testimonials__arrow-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".testimonials__arrow-next",
        prevEl: ".testimonials__arrow-prev",
      },
    });

  disablelink(btn);
  disablelink(nonActive);

  link.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (overlay.classList.contains("header__nav-list--active")) {
        intClass(overlay, "remove", "header__nav-list--active");
        intClass(burgerLine, "remove", "header__burger-line--active");
        intClass(noScroll, "remove", "html--noscroll");
      }
      const href = this.getAttribute("href").substr(1),
        scrollTarget = document.getElementById(href),
        elemenPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elemenPosition - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  window.scroll({
    top: 150,
    left: 0,
    behavior: "smooth",
  });

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    intClass(burgerLine, "toggle", "header__burger-line--active");
    intClass(overlay, "toggle", "header__nav-list--active");
    intClass(noScroll, "toggle", "html--noscroll");
  });
});

const navBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("close");
        navLinks.classList.remove("open");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.add("close");
  navLinks.addEventListener(
    "animationend",
    (e) => {
      navLinks.classList.remove("close");
      navLinks.classList.remove("open");
    },
    { once: true }
  );
});


// Removed unused explore__wrapper-inner duplication code

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});

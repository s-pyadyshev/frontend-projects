const buttonsWrap = document.querySelector(".section-services__buttons");
const buttons = document.querySelectorAll(".section-services__button");
const cards = document.querySelectorAll(".services-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetCardId = button.getAttribute("data-target");

    buttons.forEach((btn, index) => {
      if (btn !== button) {
        btn.classList.remove("is-active");
      }
      if (index === 0 && btn === button) {
        buttonsWrap.classList.remove("right");
        buttonsWrap.classList.add("left");
      }
      if (index === 1 && btn === button) {
        buttonsWrap.classList.remove("left");
        buttonsWrap.classList.add("right");
      }
    });
    button.classList.add("is-active");

    cards.forEach((card) => {
      const cardId = card.getAttribute("data-content");
      if (cardId === targetCardId) {
        cards.forEach((item) => {
          if (item !== card) {
            item.classList.remove("is-active");
          }
        });
        card.classList.add("is-active");
      }
    });
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetButtonId = card.getAttribute("data-content");

    cards.forEach((btn, index) => {
      if (btn !== card) {
        btn.classList.remove("is-active");
      }
      if (index === 0 && btn === card) {
        buttonsWrap.classList.remove("right");
        buttonsWrap.classList.add("left");
      }
      if (index === 1 && btn === card) {
        buttonsWrap.classList.remove("left");
        buttonsWrap.classList.add("right");
      }
    });
    card.classList.add("is-active");

    buttons.forEach((button) => {
      const buttonId = button.getAttribute("data-target");
      if (buttonId === targetButtonId) {
        buttons.forEach((item) => {
          if (item !== button) {
            item.classList.remove("is-active");
          }
        });
        button.classList.add("is-active");
      }
    });
  });
});

const contactForm = document.querySelector(".contact-form");
const contactFormHeader = document.querySelector(".contact-form__header");

if (contactFormHeader) {
  contactFormHeader.addEventListener("click", () => {
    contactForm.classList.toggle("is-active");
  });
}

const videoTitles = document.querySelectorAll(".section-video__inner-title");

let currentIndex = 0;

function toggleActive() {
  videoTitles.forEach((element) => element.classList.remove("is-active"));
  currentIndex = (currentIndex + 1) % videoTitles.length;
  videoTitles[currentIndex].classList.add("is-active");
}

setInterval(toggleActive, 7000);

document.querySelectorAll(".scrollto-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

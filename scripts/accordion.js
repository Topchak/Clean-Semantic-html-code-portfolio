import burger from './burger.js';
import referal from './referral.js';

document.addEventListener("DOMContentLoaded", function () {
  burger();
  referal();


  const accordionItems = document.querySelectorAll(".rest-accordion-item");

  accordionItems.forEach(item => {
    const title = item.querySelector(".rest-accordion-title");

    title.addEventListener("click", () => {
      item.classList.toggle("active");

      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
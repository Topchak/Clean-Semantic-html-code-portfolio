import burger from './burger.js';
import referal from './referral.js';
import scrollToTop from './scrollToTop.js';

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('.tab-title').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.style.display = 'none';
      });

      const activeTab = this.getAttribute('data-tab');
      document.getElementById(activeTab).style.display = 'block';

      document.querySelectorAll('.tab-title').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");

    title.addEventListener("click", () => {
      item.classList.toggle("active");

      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  burger();
  referal();
  scrollToTop();
  
});
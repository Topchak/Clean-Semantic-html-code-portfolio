const scrollToTop = () => {

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const promoSection = document.querySelector(".promo");

  window.addEventListener("scroll", function() {
    if (window.scrollY > promoSection.offsetHeight) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}
export default scrollToTop
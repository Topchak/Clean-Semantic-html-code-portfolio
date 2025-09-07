const burger = () => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const overlay = document.querySelector(".header__overlay");
  const body = document.body;
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const toggleMenu = () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("visible");
    body.classList.toggle("no-scroll");
    scrollToTopBtn.classList.remove("show");
  };
  
  burger.addEventListener("click", toggleMenu);
  
  overlay.addEventListener("click", toggleMenu);
  
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !burger.contains(e.target) &&
      mobileMenu.classList.contains("open")
      
    ) {
      toggleMenu();
    }
  });
  
  
}

export default burger
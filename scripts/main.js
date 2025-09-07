document.addEventListener("DOMContentLoaded", function () {

  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const overlay = document.querySelector(".header__overlay");
  const body = document.body;
  const domens = document.querySelectorAll('.domen');
  const domen = window.location.hostname;

  if (domens.length) {
    domens.forEach(button => {
      button.textContent = domen;
    });
  }

  const submenuToggles = document.querySelectorAll('[data-submenu-toggle]');
  if (submenuToggles) {
submenuToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const menuItem = this.closest('.menu__item');
                    const dropdown = menuItem.querySelector('.menu__dropdown');
                    const arrow = this.querySelector('.menu__arrow');
                    
                    // Закрываем все другие подменю
                    submenuToggles.forEach(otherToggle => {
                        if (otherToggle !== this) {
                            const otherMenuItem = otherToggle.closest('.menu__item');
                            const otherDropdown = otherMenuItem.querySelector('.menu__dropdown');
                            const otherArrow = otherToggle.querySelector('.menu__arrow');
                            otherDropdown.classList.remove('open');
                            otherArrow.classList.remove('rotated');
                        }
                    });
                    
                    // Переключаем текущее подменю
                    dropdown.classList.toggle('open');
                    arrow.classList.toggle('rotated');
                });
            });

            // Обработчик клика по ссылке Slots
            const slotsLinks = document.querySelectorAll('.menu__link-with-submenu');
            slotsLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Если клик был не по кнопке стрелки, переходим по ссылке
                    if (!e.target.closest('[data-submenu-toggle]')) {
                        window.location.href = this.getAttribute('href');
                    }
                });
            });
  }




  const subMenuToggle = document.querySelectorAll(".submenu-toggle");
  if (subMenuToggle) {
    document.querySelectorAll('.submenu-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.has-submenu');
        parent.classList.toggle('submenu-open');
      });
    });
  }

  if (burger && mobileMenu && overlay) {
    const toggleMenu = () => {
      burger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
      overlay.classList.toggle("visible");
      body.classList.toggle("no-scroll");
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

  const promoCode = document.querySelectorAll('.promo-code');

  if (promoCode.length) {
    promoCode.forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();

        const code = this.getAttribute('data-code');
        const wrapper = this.closest('.promo-code__wrapper');
        const notification = wrapper.querySelector('.promo-code__copy-notification');

        navigator.clipboard.writeText(code).then(() => {
          notification.classList.add('active');

          setTimeout(() => {
            notification.classList.remove('active');
          }, 1000);
        }).catch(err => {
          console.error('Ошибка копирования: ', err);
        });
      });
    });

  }

  const restAccordionItems = document.querySelectorAll(".rest-accordion-item");
  if (restAccordionItems) {
    restAccordionItems.forEach(item => {
      const title = item.querySelector(".rest-accordion-title");

      title.addEventListener("click", () => {
        item.classList.toggle("active");

        restAccordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
      });
    });
  }


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
      const promoSection = document.querySelector(".promo");
      if (promoSection) {
        if (window.scrollY > promoSection.offsetHeight) {
          scrollToTopBtn.classList.add("show");
        } else {
          scrollToTopBtn.classList.remove("show");
        }
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  const tabTitles = document.querySelectorAll('.tab-title');
  if (tabTitles.length) {
    tabTitles.forEach(tab => {
      tab.addEventListener('click', function () {
        const accordions = document.querySelectorAll('.accordion');
        accordions.forEach(accordion => {
          accordion.style.display = 'none';
        });

        const activeTab = this.getAttribute('data-tab');
        const activeAccordion = document.getElementById(activeTab);
        if (activeAccordion) {
          activeAccordion.style.display = 'block';
        }

        tabTitles.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }



  const ticketButtons = document.querySelectorAll(".tike");
  if (ticketButtons.length) {
    ticketButtons.forEach(button => {
      button.addEventListener("click", () => {
        window.open("https://fatpirate3.com/en/", "_blank");
      });
    });
  }
  const ticaButtons = document.querySelectorAll(".tika");
  if (ticaButtons.length) {
    ticaButtons.forEach(button => {
      button.addEventListener("click", () => {
        window.open("https://fatpirate3.com/en/games/slots", "_blank");
      });
    });
  }



  const promo = document.getElementById("promo");
  const regButton = document.querySelector(".registration__button");
  if (promo && regButton) {
    window.addEventListener("scroll", () => {
      const promoBottom = promo.getBoundingClientRect().bottom;
      if (promoBottom <= 0) {
        regButton.classList.add("scrolled");
      } else {
        regButton.classList.remove("scrolled");
      }
    });
  }

  const headers = document.querySelectorAll(".accordion-header");
  if (headers.length) {
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const expanded = header.getAttribute("aria-expanded") === "true";
        headers.forEach(hdr => {
          hdr.setAttribute("aria-expanded", "false");
          hdr.classList.remove("active");
          const content = document.getElementById(hdr.getAttribute("aria-controls"));
          if (content) {
            content.style.maxHeight = null;
            content.classList.remove("open");
            content.setAttribute("aria-hidden", "true");
          }
        });

        if (!expanded) {
          header.setAttribute("aria-expanded", "true");
          header.classList.add("active");
          const content = document.getElementById(header.getAttribute("aria-controls"));
          if (content) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("open");
            content.setAttribute("aria-hidden", "false");
          }
        }
      });

      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          header.click();
        }
      });
    });
  }
});
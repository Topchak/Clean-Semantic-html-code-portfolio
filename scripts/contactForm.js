


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contacts-form');
  const emailInput = document.getElementById('contacts-email');
  const messageInput = document.getElementById('contacts-textarea');
  const messageWrapper = document.querySelector('.error-message__wrapper');
  const messageText = messageWrapper.querySelector('.error-message');

  document.querySelectorAll(".tike").forEach(button => {
    button.addEventListener("click", () => {
      window.open("https://Fat Pirate.com/en/", "_blank");
    });
  });


  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  const validateForm = (email, message) => {
    if (!email.trim()) {
      return 'Enter your email';
    }
    
    if (!validateEmail(email)) {
      return 'Enter a valid email';
    }
    
    if (!message.trim()) {
      return 'Enter your message';
    }
    
  
    return true;
  };

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
  

  let messageTimeout; 

  const showMessage = (message, isError = true) => {
    messageText.textContent = message;
    messageWrapper.style.display = 'flex';
    messageWrapper.style.color = isError ? 'red' : 'green'; 

    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(clearMessage, 3000);
  };

  const clearMessage = () => {
    messageText.textContent = '';
    messageWrapper.style.display = 'none';
  };

  emailInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const latinRegex = /^[a-zA-Z0-9@._-]*$/;

    if (!latinRegex.test(inputValue)) {
      event.target.value = inputValue.replace(/[^\x00-\x7F]/g, '');
    }
    clearMessage();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const validationResult = validateForm(email, message);

    if (validationResult !== true) {
      if (validationResult.includes('email')) {
        showMessage(validationResult, true);
        emailInput.focus();
      } else {
        showMessage(validationResult, true);
        messageInput.focus();
      }
      return;
    }
    messageText.style.color = "#69f67f";
    showMessage('Thank you, your message has been sent!', false);

    console.log({
      email,
      message
    });

    form.reset();
  });

  referal();
  burger();
});

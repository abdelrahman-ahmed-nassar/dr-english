// Main JavaScript for Dr. English Website

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav a, .footer-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Close mobile menu if open
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
          }

          // Scroll to target
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Account for fixed header
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Active Navigation Highlighting
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active");
      }
    });
  });

  // Form Submission (Demo - would need backend integration)
  const contactForm = document.querySelector(".contact-form form");
  const newsletterForm = document.querySelector(".footer-newsletter form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Demo alert - in a real implementation, you would send the form data to a server
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Demo alert - in a real implementation, you would send the form data to a server
      alert("Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    });
  }
});

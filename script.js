// Бургер-меню
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav__link")) {
      nav.classList.remove("nav--open");
    }
  });
}

// Подсветка активного пункта меню при скролле
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

function updateActiveNav() {
  let currentId = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 120;
    const offsetBottom = offsetTop + section.offsetHeight;

    if (scrollY >= offsetTop && scrollY < offsetBottom) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav__link--active");
    const href = link.getAttribute("href");
    if (href === `#${currentId}`) {
      link.classList.add("nav__link--active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

// Фильтрация портфолио
const filterButtons = document.querySelectorAll(".filter__btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("filter__btn--active"));
    btn.classList.add("filter__btn--active");

    projects.forEach((project) => {
      const type = project.dataset.type || "";
      if (filterValue === "all" || type.includes(filterValue)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Аккордеон FAQ
const accordion = document.getElementById("faq-accordion");

if (accordion) {
  accordion.addEventListener("click", (event) => {
    const header = event.target.closest(".accordion__header");
    if (!header) return;

    const item = header.parentElement;
    const isOpen = item.classList.contains("accordion__item--open");

    // закрываем все
    accordion.querySelectorAll(".accordion__item").forEach((el) => {
      el.classList.remove("accordion__item--open");
    });

    // открываем кликнутый, если он не был открыт
    if (!isOpen) {
      item.classList.add("accordion__item--open");
    }
  });
}

// Форма контакта (демо)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    alert(`Спасибо, ${name || "заказчик"}! В демо-версии заявка никуда не отправляется, но на реальном сайте здесь будет отправка на почту или в бота.`);
    contactForm.reset();
  });
}

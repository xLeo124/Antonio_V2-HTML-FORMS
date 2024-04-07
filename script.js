const dropdownToggle = document.querySelector(".dropdown-toggle");
const submenuToggles = document.querySelectorAll(".submenu-toggle");
const menu = document.querySelector(".menu");


dropdownToggle.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.classList.toggle("open");
});


submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle("open");
  });
});


document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !dropdownToggle.contains(e.target)) {
    menu.classList.remove("open");
  }
});
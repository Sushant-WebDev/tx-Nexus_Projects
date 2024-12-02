// index file functionalities -->
// Select all navigation items
let navItems = document.querySelectorAll(".nav-option a");

// Get the current page's pathname (e.g., "/skill.html")
let currentPage = window.location.pathname;

// Add the 'active' class to the navigation item matching the current page
navItems.forEach((navItem) => {
  if (navItem.getAttribute("href") === currentPage) {
    navItem.classList.add("active");
  } else {
    navItem.classList.remove("active");
  }
});

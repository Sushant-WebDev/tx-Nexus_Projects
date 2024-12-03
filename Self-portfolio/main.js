// index file functionalities -->

// Highlight the active link based on the current page URL
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-option a");
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

  navItems.forEach(navItem => {
    const navPath = navItem.getAttribute("href");
    if (navPath === currentPage) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });

  // Optional: Handle click events to highlight links dynamically without reloads
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      navItems.forEach(item => item.classList.remove("active"));
      navItem.classList.add("active");
    });
  });
});

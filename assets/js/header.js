function initScrollNav() {
  const bottomNav = document.getElementById("bottom-nav");
  const searchBtn = document.getElementById("search-btn");
  const searchBar = document.getElementById("search-bar");
  const menuToggle = document.getElementById("menu-toggle");
  const navWrapper = document.getElementById("nav-wrapper");
  const headerEl = document.querySelector("header");
  const joinBtn = document.getElementById("join-btn");
  const topBtnWrapper = document.getElementById("top-btn-wrapper");
  const mobileBtnWrapper = document.getElementById("mobile-btn-wrapper");

  // --- Fixed threshold for sticky header ---
  const threshold = 820;

  // --- Scroll effect: sticky header + bottom nav color ---
  window.addEventListener("scroll", () => {
    if (window.scrollY >= threshold) {
      bottomNav?.classList.add("scrolled");
      headerEl?.classList.add("sticky");
    } else {
      bottomNav?.classList.remove("scrolled");
      headerEl?.classList.remove("sticky");
    }
  });

  // --- Search toggle ---
  if (searchBtn && searchBar) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchBar.classList.toggle("hidden");
      searchBar.classList.toggle("active");
      searchBtn.classList.toggle("active");

      const input = searchBar.querySelector("input");
      if (searchBar.classList.contains("active") && input) {
        input.focus();
      }
    });

    document.addEventListener("click", (e) => {
      if (
        searchBar.classList.contains("active") &&
        !searchBar.contains(e.target) &&
        !searchBtn.contains(e.target)
      ) {
        searchBar.classList.remove("active");
        searchBar.classList.add("hidden");
        searchBtn.classList.remove("active");
      }
    });
  }

  // --- Hamburger toggle ---
  if (menuToggle && navWrapper) {
    menuToggle.addEventListener("click", () => {
      navWrapper.classList.toggle("active");
    });
  }

  // --- Move Join button between top nav & mobile wrapper ---
  function moveJoinButton() {
    if (!joinBtn || !topBtnWrapper || !mobileBtnWrapper) return;

    if (window.innerWidth < 1200) {
      // Move button inside mobile wrapper (hamburger menu)
      if (!mobileBtnWrapper.contains(joinBtn)) {
        mobileBtnWrapper.appendChild(joinBtn);
      }
    } else {
      // Move button back to top nav
      if (!topBtnWrapper.contains(joinBtn)) {
        topBtnWrapper.appendChild(joinBtn);
      }
    }
  }

  // Run on load
  moveJoinButton();

  // Run on resize
  window.addEventListener("resize", moveJoinButton);

  // Optional: run on DOMContentLoaded to ensure proper initial placement
  window.addEventListener("DOMContentLoaded", moveJoinButton);
}

export default initScrollNav;
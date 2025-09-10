const initAccordion = () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all
      items.forEach(i => {
        i.classList.remove("active");
        const iBody = i.querySelector(".accordion-body");
        iBody.style.maxHeight = null;
      });

      // Open clicked one
      if (!isOpen) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });

    // Open first by default
    if (index === 0) {
      item.classList.add("active");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });

  // Adjust active height on resize
  window.addEventListener("resize", () => {
    items.forEach(item => {
      const body = item.querySelector(".accordion-body");
      if (item.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
};

export default initAccordion;
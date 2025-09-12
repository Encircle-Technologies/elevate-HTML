const initAccordion = () => {
  const items = document.querySelectorAll(".accordion-item");

  const close = (el, item) => {
    if (!item.classList.contains("active")) return;
    el.style.height = el.scrollHeight + "px"; // set current height
    requestAnimationFrame(() => {
      el.style.height = "0px"; // animate to closed
    });
    item.classList.remove("active");
  };

  const open = (el, item) => {
    el.style.height = el.scrollHeight + "px"; // expand to content height
    item.classList.add("active");
    el.addEventListener(
      "transitionend",
      () => {
        if (item.classList.contains("active")) {
          el.style.height = "auto"; // let it resize naturally
        }
      },
      { once: true }
    );
  };

  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active"); // check old state

      // Close all
      items.forEach(i => {
        const iBody = i.querySelector(".accordion-body");
        close(iBody, i);
      });

      // Open clicked one if it was closed
      if (!isOpen) open(body, item);
    });

    // Open first by default
    if (index === 0) {
      item.classList.add("active");
      body.style.height = "auto";
    }
  });

  // On resize, recalc open accordion height
  window.addEventListener("resize", () => {
    items.forEach(item => {
      const body = item.querySelector(".accordion-body");
      if (item.classList.contains("active")) {
        body.style.height = "auto";
      }
    });
  });
};

export default initAccordion;

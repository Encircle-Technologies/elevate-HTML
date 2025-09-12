import { initPricingSlider } from './slider.js';

const initPricingTabs = () => {
  const tabs = document.querySelectorAll('.price-tabs button');
  const wrapper = document.querySelector('.pricing-slider .swiper-wrapper');
  const allSlides = document.querySelectorAll('.pricing-slider .swiper-slide');

  if (tabs.length === 0 || !wrapper) return;

  const showSlidesForPlan = (selectedPlan) => {
    // Destroy old swiper instance first
    if (wrapper.closest('.pricing-slider').swiper) {
      wrapper.closest('.pricing-slider').swiper.destroy(true, true);
    }

    // Clear wrapper
    wrapper.innerHTML = "";

    // Append only slides matching the selected plan
    allSlides.forEach((slide) => {
      if (slide.dataset.plan === selectedPlan) {
        wrapper.appendChild(slide);
      }
    });

    // Re-init Swiper
    initPricingSlider();
  };

  // Default active = monthly
  const monthlyTab = document.querySelector('.price-tabs button[data-plan="monthly"]');
  if (monthlyTab) monthlyTab.classList.add('active');
  showSlidesForPlan('monthly');

  // Tab click handling
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      showSlidesForPlan(tab.dataset.plan);
    });
  });
};

export default initPricingTabs;
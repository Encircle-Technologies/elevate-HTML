const initPricingTabs = () => {
  const tabs = document.querySelectorAll('.price-tabs button');
  const slides = document.querySelectorAll('.pricing-slider .swiper-slide');

  if (tabs.length === 0) return;

  const showSlidesForPlan = (selectedPlan) => {
    slides.forEach((slide) => {
      slide.style.display = slide.dataset.plan === selectedPlan ? 'block' : 'none';
    });
  };

  // Default active = monthly
  const monthlyTab = document.querySelector('.price-tabs button[data-plan="monthly"]');
  if (monthlyTab) monthlyTab.classList.add('active');
  showSlidesForPlan('monthly');

  // Add click listeners
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      showSlidesForPlan(tab.dataset.plan);
    });
  });
};

export default initPricingTabs;
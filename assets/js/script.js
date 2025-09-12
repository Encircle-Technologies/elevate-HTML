
import initAccordion from "./accordion.js";
import initScrollNav from "./header.js"
import initSliders from "./slider.js";
import initPricingTabs from "./tab.js";

document.addEventListener('DOMContentLoaded', function() {
    initScrollNav();
    initSliders();    
    initPricingTabs();
    initAccordion();
})
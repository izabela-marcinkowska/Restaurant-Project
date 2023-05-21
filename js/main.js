'use strict';

const rootElement = document.documentElement;
const scrollToTopBtn = document.querySelector('.scroll-to-top');

function scrollToTop(event) {
  event.preventDefault();
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  // Show scroll button after 25%
  if (rootElement.scrollTop / scrollTotal > 0.25) {
    // Show button
    scrollToTopBtn.classList.add('show-scroll-btn');
  } else {
    // Hide button
    scrollToTopBtn.classList.remove('show-scroll-btn');
  }
};

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

"use strict";

const rootElement = document.documentElement; //entire site
const scrollToTopBtn = document.querySelector(".scroll-to-top");

function scrollToTop(event) {
  // Remove default link behaviour (etc. quick scrolling)
  event.preventDefault();
  // Scroll to top logic
  rootElement.scrollTo({
    //Defining top position after scrolling upp
    top: 0,
    //Defining way of scrolling
    behavior: "smooth",
  });
}

function handleScroll() {
  // Calculate how far you have scrolled
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  // Show scroll button after 25%
  if (rootElement.scrollTop / scrollTotal > 0.25) {
    // Adds class to show the button
    scrollToTopBtn.classList.add("show-scroll-btn");
  } else {
    // Remove class to Hide button
    scrollToTopBtn.classList.remove("show-scroll-btn");
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

// När sidan laddat färdigt
document.addEventListener("DOMContentLoaded", function () {
  sal();
});

/* const image = document.querySelector(".scroll-image");

// Define scroll behavior parameters
const initialPosition = 100; // Initial top position of the image
const bottomLimit = 120; // Bottom point where it transitions to fixed phase
let lastScrollY = 0; // Tracks the previous scroll position
let isFixed = false; // Tracks if the image is in the fixed phase

// Update the image's position on scroll
function updateImagePosition() {
  const currentScrollY = window.scrollY;

  // Determine scroll direction
  const isScrollingDown = currentScrollY > lastScrollY;

  if (isScrollingDown) {
    // Scroll Down: Transition to fixed when crossing the bottom point
    if (currentScrollY > bottomLimit && !isFixed) {
      image.style.position = "absolute";
      image.style.top = `${bottomLimit + initialPosition}px`;
      image.classList.add("fixed");
      isFixed = true;
    }
  } else {
    // Scroll Up: Return to relative when crossing back below the bottom point
    if (currentScrollY <= bottomLimit && isFixed) {
      image.style.position = "relative";
      image.style.top = `${currentScrollY + initialPosition}px`;
      image.classList.remove("fixed");
      isFixed = false;
    }
  }

  // Update position for flowing phase (only in relative state)
  if (!isFixed) {
    image.style.top = `${currentScrollY + initialPosition}px`;
  }

  // Update last scroll position
  lastScrollY = currentScrollY;
}

// Listen for scroll events
window.addEventListener("scroll", updateImagePosition);
*/
/* const imageContainer = document.querySelector(".image-container");
const scrollImage = document.querySelector(".scroll-image");

let isFixed = false;
let startPosition = 0;
let endPosition = 0;

function initializeImageTracking() {
  // Get the container's position and dimensions
  const containerRect = imageContainer.getBoundingClientRect();
  const imageRect = scrollImage.getBoundingClientRect();

  // Calculate start and end positions
  startPosition = containerRect.top + window.scrollY;
  endPosition = containerRect.bottom + window.scrollY - imageRect.height;
}

window.addEventListener("scroll", () => {
  // Ensure positions are calculated
  if (startPosition === 0 && endPosition === 0) {
    initializeImageTracking();
  }

  // Current scroll position
  const scrollPosition = window.scrollY;

  // Determine if we're at or past the end position
  if (scrollPosition >= endPosition) {
    // If not already fixed, set to fixed position at the bottom
    if (!isFixed) {
      imageContainer.style.position = "fixed";
      scrollImage.style.top = "auto";
      scrollImage.style.bottom = "20px";
      scrollImage.style.left = "62%";

      isFixed = true;
    }
  } else if (scrollPosition < endPosition && scrollPosition >= startPosition) {
    // Between start and end - relative positioning
    const progress =
      (scrollPosition - startPosition) / (endPosition - startPosition);
    scrollImage.style.position = "absolute";
    scrollImage.style.top = `${progress * 100}%`;
    scrollImage.style.bottom = "auto";
    scrollImage.style.left = "56%";

    isFixed = false;
  } else {
    // Before start position - reset to initial state
    scrollImage.style.position = "relative";
    scrollImage.style.top = "0";
    scrollImage.style.bottom = "auto";
    scrollImage.style.left = "56%";
    scrollImage.style.transform = "translateX(-50%)";
    isFixed = false;
  }
});

// Recalculate on resize and initial load
window.addEventListener("resize", initializeImageTracking);
window.addEventListener("load", initializeImageTracking); */

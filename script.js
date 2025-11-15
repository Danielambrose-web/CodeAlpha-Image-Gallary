// ============ PAGE LOADER ============
// Wait 3 seconds, then hide the loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

// ============ FILTER BUTTONS ============
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      galleryItems.forEach((item) => {
        const category = item.dataset.category;
        if (filter === "all" || category === filter) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
});

// ============ LIGHTBOX FUNCTIONALITY ============
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentIndex = 0;
let visibleItems = [];

function openLightbox(item) {
  visibleItems = Array.from(
    document.querySelectorAll(".gallery-item:not(.hide)")
  );
  currentIndex = visibleItems.indexOf(item);
  updateLightboxImage();
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % visibleItems.length;
  updateLightboxImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const imgSrc = visibleItems[currentIndex].querySelector("img").src;
  lightboxImg.src = imgSrc;
}

// Image click event
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});


closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("active")) {
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
    if (e.key === "Escape") closeLightbox();
  }
});

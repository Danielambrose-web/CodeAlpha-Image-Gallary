document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  let visibleItems = [];

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
  function openLightbox(item) {
    visibleItems = Array.from(
      document.querySelectorAll(".gallery-item:not(.hide)")
    );
    currentIndex = visibleItems.indexOf(item);
    const imgSrc = item.querySelector("img").src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add("active");
    document.addEventListener("keydown", handleKeystroke);
  }
  function closeLightbox() {
    lightbox.classList.remove("active");
    document.removeEventListener("keydown", handleKeystroke);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxImage();
  }
  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxImage();
  }
  function updateLightboxImage() {
    const imgSrc = visibleItems[currentIndex].querySelector("img").src;

    lightboxImg.src = imgSrc;
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      openLightbox(item);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNextImage);
  prevBtn.addEventListener("click", showPrevImage);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  function handleKeystroke(event) {
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      showNextImage();
    } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      showPrevImage();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }
});

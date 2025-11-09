document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
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
});

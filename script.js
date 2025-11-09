// This is a special event listener that waits for the entire HTML document
// to be fully loaded and ready before running the JavaScript code inside.
// This is crucial because if the JS runs before the buttons exist, it can't find them!
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      const filterValue = button.getAttribute("data-filter");
      console.log("Button clicked! The filter is:", filterValue);
    });
  });
});

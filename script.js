// --- FILTERING LOGIC ---
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const filterSelect = document.getElementById("filter-select");

function applyFilter(filter) {
  galleryItems.forEach((item) => {
    if (filter === "all" || item.dataset.category === filter) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });

  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });

  if (filterSelect) {
    for (let i = 0; i < filterSelect.options.length; i++) {
      const opt = filterSelect.options[i];
      opt.selected = opt.dataset.filter === filter;
    }
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    applyFilter(filter);
  });
});

// If the responsive dropdown exists, listen for changes and apply the selected filter
if (filterSelect) {
  filterSelect.addEventListener("change", () => {
    // Get the currently selected <option>
    const selected = filterSelect.options[filterSelect.selectedIndex];
    // Read the filter value from the option's data-filter attribute
    const filter = selected.dataset.filter;
    applyFilter(filter);
  });
}

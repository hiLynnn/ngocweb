document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-left-list a");
    const products = document.querySelectorAll(".menu_item");

    filterLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const filter = this.dataset.filter;

        products.forEach(product => {
          const category = product.dataset.category;

          if (filter === "all" || category === filter) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  });
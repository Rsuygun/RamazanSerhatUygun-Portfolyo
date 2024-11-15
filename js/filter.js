document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.querySelector(".portfolio-filter-nav");
    const galleryItems = document.querySelectorAll(".alt-image");

    filterContainer.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "BUTTON") {
            const filterValue = e.target.getAttribute("data-id");

            galleryItems.forEach((item) => {
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        }
    });
});

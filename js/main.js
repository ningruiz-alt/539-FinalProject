document.addEventListener("DOMContentLoaded", function () {
  // Genre tabs filter
  const tabs = document.querySelectorAll(".genre-tab");
  const cards = document.querySelectorAll(".genre-list .game-card");

  if (tabs.length && cards.length) {
    const applyFilter = (genre) => {
      cards.forEach((card) => {
        const cardGenre = card.dataset.genre;
        if (genre === "all" || cardGenre === genre) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const genre = tab.dataset.genre;

        // active
        tabs.forEach((t) => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        applyFilter(genre);
      });
    });

    const hash = window.location.hash.replace("#", "");
    if (hash === "narrative" || hash === "openworld" || hash === "coop") {
      const targetTab = document.querySelector(
        `.genre-tab[data-genre="${hash}"]`
      );
      if (targetTab) {
        targetTab.click();
      }
    } else {
      applyFilter("all");
    }
  }
});
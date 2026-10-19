
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Search marketing team
  const searchInput = document.getElementById("teamSearch");
  const teamCards = document.querySelectorAll(".team-card");
  const teamCount = document.getElementById("teamCount");
  const noResults = document.getElementById("noResults");

  function searchTeam() {
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    teamCards.forEach(function (card) {
      const searchableText = [
        card.dataset.name,
        card.dataset.role,
        card.dataset.location,
        card.textContent
      ].join(" ").toLowerCase();

      const matches = searchableText.includes(query);

      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    if (teamCount) {
      teamCount.textContent =
        "Showing " + visibleCount + " of " +
        teamCards.length + " team members";
    }

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", searchTeam);
  }

  // Automatically update the footer year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Back to top button
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 300);
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

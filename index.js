document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function navigateTo(sectionId) {
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute("href").substring(1);
      navigateTo(targetSectionId);
    });
  });

  // Display the overview section by default
  navigateTo("overview");
});

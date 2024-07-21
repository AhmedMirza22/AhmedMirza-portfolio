document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      sections.forEach((section) => {
        section.style.opacity = 0;
        setTimeout(() => {
          section.style.display = "none";
        }, 500);
      });

      setTimeout(() => {
        targetSection.style.display = "block";
        setTimeout(() => {
          targetSection.style.opacity = 1;
        }, 50);
      }, 500);
    });
  });

  // Set the initial section
  const initialSection = document.getElementById("overview");
  initialSection.style.display = "block";
  setTimeout(() => {
    initialSection.style.opacity = 1;
  }, 50);
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        const id = section.getAttribute("id");
        document.querySelector("nav a.active")?.classList.remove("active");
        document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
      }
    });
  });
});

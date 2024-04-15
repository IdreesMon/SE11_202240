const links = document.querySelectorAll("div#nav > a");
const sections = document.querySelectorAll("div#main > div");

links.forEach((link, i) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    sections.forEach((section) => {
        section.classList.add("hide");
    })

    sections[i].classList.remove("hide");
  });
});

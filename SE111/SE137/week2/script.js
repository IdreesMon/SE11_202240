const links = document.querySelectorAll("div#nav > a");
const sections = document.querySelectorAll("div#main > div");

// console.log(sections);

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    sections.forEach((section) => {
        section.classList.add("hide");
    })

    // console.log(links);

    // console.log(Array.from(links).indexOf(event.target));
    // console.log(event.target);

    // console.log(sections[Array.from(links).indexOf(event.target)]);
    sections[Array.from(links).indexOf(event.target)].classList.remove("hide");
  });
});

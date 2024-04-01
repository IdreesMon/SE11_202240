const links = document.querySelectorAll("div#nav > a");
const sections = document.querySelectorAll("div#main > div");

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", (event) => {
//         console.log(event);
//     });
// }

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    sections.forEach((section) => {
        section.classList.add("hide");
    })

    sections[Array.from(links).indexOf(event.target)].classList.remove("hide");
  });
});

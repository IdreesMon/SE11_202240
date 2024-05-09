const fileExplorer = document.querySelector(".file-explorer");
const tabs = document.querySelectorAll(".tab");
const activeTab = document.querySelector("#active-tab");
activeTab.innerHTML = tabs[0].textContent;

document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        activeTab.innerHTML = tab.textContent;
    })
})

document.querySelector("button#toggle-button").addEventListener("click", () => {
    console.log("button was clicked");
    const isHidden = fileExplorer.style.display === "none";

    if (isHidden) {
        fileExplorer.style.display = "block"
    } else {
        fileExplorer.style.display = "none"
    }
})
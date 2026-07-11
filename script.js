const popup = document.getElementById("welcome-popup");
const enterButton = document.getElementById("enter-button");
const header = document.getElementById("header");

if (localStorage.getItem("welcomeSeen")) {
    popup.style.display = "none";
}

enterButton.addEventListener("click", () => {

    popup.classList.add("hidden");

    localStorage.setItem("welcomeSeen", "true");

    setTimeout(() => {
        popup.style.display = "none";
    }, 500);

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

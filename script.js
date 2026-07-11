const popup = document.getElementById("welcome-popup");
const enterButton = document.getElementById("enter-button");

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

const popup = document.getElementById("welcome-popup");
const enterButton = document.getElementById("enter-button");
const header = document.getElementById("header");



/* ========================= */
/* POPUP BIENVENIDA */
/* ========================= */


if (popup && localStorage.getItem("welcomeSeen")) {

    popup.style.display = "none";

}


if (enterButton) {

    enterButton.addEventListener("click", () => {


        popup.classList.add("hidden");


        localStorage.setItem("welcomeSeen", "true");


        setTimeout(() => {

            popup.style.display = "none";

        }, 500);


    });

}



/* ========================= */
/* HEADER SCROLL */
/* ========================= */


window.addEventListener("scroll", () => {


    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


});



/* ========================= */
/* TRANSICIÓN ENTRE PÁGINAS */
/* ========================= */


const links = document.querySelectorAll("a");


links.forEach(link => {


    const href = link.getAttribute("href");


    if (
        href &&
        href.endsWith(".html") &&
        !href.startsWith("#")
    ) {


        link.addEventListener("click", (event) => {


            event.preventDefault();



            const index = document.querySelector(".recuerdos-index");


            if (index) {

                index.classList.add("exit");

            }



            document.body.classList.add("page-exit");



            setTimeout(() => {


                window.location.href = href;


            }, 500);


        });


    }


});

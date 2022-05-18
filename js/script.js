window.addEventListener("scroll", () => {
    const header = document.querySelector("#header")
    const main = document.querySelector("#main")
    var windowY = window.pageYOffset

    if (windowY >= 120) {
        header.classList.add("header-fixed")
        main.classList.add("main-margin-fixed")
    }
    else {
        header.classList.remove("header-fixed")
        main.classList.remove("main-margin-fixed")
    }
})

const button = document.querySelector("#button-menu")
button.addEventListener("click", () => {
    const nav = document.querySelector("#nav")
    button.classList.toggle("active-button")
    nav.classList.toggle("active")
})

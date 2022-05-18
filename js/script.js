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

const trocar = document.querySelector("#mudar")
trocar.addEventListener("click", () => {
    const login = document.querySelector("#login-page")
    const signup = document.querySelector("#signup-page")
    login.classList.toggle("trocar")
    signup.classList.toggle("trocar")
})

const trocar_jogo = document.querySelector("#mudar-jogo")
trocar_jogo.addEventListener("click", () => {
    const menu_jogo = document.querySelector("#menu-jogo")
    const jogo = document.querySelector("#jogo")
    jogo.classList.toggle("trocar")
    menu_jogo.classList.toggle("trocar")
})
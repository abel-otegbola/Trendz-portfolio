
let theme = window.matchMedia("(prefers-color-scheme: dark)")


window.addEventListener("load", event => {
    if(theme.matches || theme.media === "not all") {
        darkTheme()
    }
    else {
        lightTheme()
    }
})
theme.addEventListener("change", event => {
    if(theme.matches || theme.media === "not all") {
        darkTheme()
    }
    else {
        lightTheme()
    }
})

const lightTheme = () => {
    $("body").removeClass("dark").removeClass("bg-dark")
    $("#nav").removeClass("bg-dark")
    $(".footer-top").removeClass("bg-dark")
}
const darkTheme = () => {
    $("body").addClass("dark").addClass("bg-dark")
    $("#nav").addClass("bg-dark")
    $(".footer-top").addClass("bg-dark")
}
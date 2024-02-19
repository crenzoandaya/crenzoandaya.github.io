const nav = document.querySelector("nav");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if(currentScrollY > lastScrollY){
        console.log('scroll down')
        nav.classList.add("hidden");
    }
    else {
        nav.classList.remove("hidden");
        console.log('scroll up')
    }
    lastScrollY = currentScrollY;
});
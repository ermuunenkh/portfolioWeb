const images = ["image1.png", "image2.png", "image3.png", "image4.png"];
const pth = "sources/profile-images/"

// Flipping Mechanism
function flipImage(element) {
    const card = document.querySelector(".img-container .card");
    const frontImg = card.querySelector(".front");
    const backImg = card.querySelector(".back");
    const onFocus = card.querySelector(".on-focus");

    const currentIndex = images.indexOf(onFocus.firstElementChild.getAttribute("src").replace(pth, ""));
    const nextIndex = (currentIndex + 1) % images.length;

    if ("front" === onFocus.classList[0]) {
        backImg.firstElementChild.setAttribute("src", pth + images[nextIndex]);
    }
    else {
        frontImg.firstElementChild.setAttribute("src", pth + images[nextIndex]);
    }
    card.classList.toggle("flipped");
    frontImg.classList.toggle("on-focus");
    backImg.classList.toggle("on-focus");
}
// Flipping Animation
const card = document.querySelector(".img-container .card");
function flippingTransition() {
    if ("flipped" === card.classList[1]){
        const card = document.querySelector(".card.flipped");
        card.style.transform = 'scale(1.1)';
        setTimeout(() => {
            card.style.transform += ' rotateY(180deg)';
            
            setTimeout(() => {
            card.style.transform = 'rotateY(180deg) scale(1)';
            }, 500);
        }, 250);
    }
    else {
        const card = document.querySelector(".card");
        card.style.transform = 'rotateY(180deg) scale(1.1)';
        setTimeout(() => {
            card.style.transform += ' rotateY(180deg)';
            
            setTimeout(() => {
            card.style.transform = 'rotateY(360deg) scale(1)';
            }, 500);
        }, 250);
    }
    
}
card.addEventListener("click", flippingTransition);
// Guide Discovery
const cover = document.querySelector(".img-container .cover")
cover.addEventListener("mouseover", () => {
    setTimeout(() => {
        cover.remove();
    }, 500);
})

// Greetings resize

const greetings = document.querySelector("#home .greetings");
function resizeGreeting() {
    const width = window.screen.width;
    const height = window.screen.height;

    if (width > height) {
        greetings.style.maxWidth = "40%";
        greetings.style.minWidth = "30%";
    }
    else if (width <= height && width <= 900){
        greetings.style.maxWidth = "100%";
        greetings.style.minWidth = "250px";
    }

    if (width <= 1500) {
        const paragraphs = greetings.querySelectorAll("h1");
        for(let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontSize = "1.875rem"
        }
        const button = greetings.querySelector("button a");
        button.style.fontSize = "1.5rem";
    }
    else {
        const paragraphs = greetings.querySelectorAll("h1");
        for(let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontSize = "2.4rem"
        }
        const button = greetings.querySelector("button a");
        button.style.fontSize = "1.8rem";
    }
}
window.addEventListener("resize", resizeGreeting);
resizeGreeting();

const hamburger = document.querySelector(".hamburger");
const slideMenu = document.querySelector(".container");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("activated");
    slideMenu.classList.toggle("activated");
}

const navLink = document.querySelectorAll("header ul a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("activated");
    slideMenu.classList.remove("activated");
}
document.addEventListener("click", (event) => {
    const isClickInside = hamburger.contains(event.target) || slideMenu.contains(event.target);
    if (!isClickInside) {
        hamburger.classList.remove("activated");
        slideMenu.classList.remove("activated");
    }
});


function menuMinimizer() {
    const width = window.innerWidth;
    if (width <= 900) {
        const visibleNavs = document.querySelectorAll('.nav-menu .moveable.nav-item');
        const parentRemove = document.querySelector('.nav-menu')
        const parentAdd = document.querySelector('.invisible')
        const newChildrenList = []
        const invisibleChildren = document.querySelectorAll('.invisible .immovable.nav-item');
        for(let i = 0; i < visibleNavs.length; i++){
            parentRemove.removeChild(visibleNavs[i]);
            newChildrenList.push(visibleNavs[i]);
        }
        for(let i = 0; i < invisibleChildren.length; i++) {
            parentAdd.removeChild(invisibleChildren[i]);
            newChildrenList.push(invisibleChildren[i]);
        }
        for(let i = 0; i < newChildrenList.length; i++){
            parentAdd.appendChild(newChildrenList[i]);
        }
    }
    else if(width > 800) {
        const visibleNavs = document.querySelectorAll('.invisible .moveable.nav-item');
        const parentRemove = document.querySelector('.invisible')
        const parentAdd = document.querySelector('.nav-menu')
        for(let i = 0; i < visibleNavs.length; i++){
            parentRemove.removeChild(visibleNavs[i]);
            parentAdd.appendChild(visibleNavs[i])
        }
    }
}

window.addEventListener("resize", menuMinimizer);
menuMinimizer();

// visibleNavs[i].classList.remove('nav-inactive');
// visibleNavs[i].classList.add('nav-item');
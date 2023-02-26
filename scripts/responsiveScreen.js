//#################### Responsive Header ####################

function logoCenter(condition) {
    if(condition === 0) {
        const windowWidth = window.innerWidth;
        const logo = document.querySelector('.nav-logo');
        const logoWidth = parseFloat(window.getComputedStyle(logo).width);
        const navbar = document.querySelector('.navbar');
        const navbarPadding = parseFloat(window.getComputedStyle(navbar).paddingLeft);

        const marginValue = (windowWidth - logoWidth) / 2 - navbarPadding;
        logo.style.marginLeft = marginValue + 'px';
    }
    else {
        const orignialRem = 6.25;
        const logo = document.querySelector('.nav-logo');
        logo.style.marginLeft = orignialRem + 'rem';
    }
}

function responsiveEvent() {
    const htmlFontSize = document.querySelector('html');
    // const fontSize = window.getComputedStyle(htmlFontSize).fontSize;
    // const fontValue = parseFloat(fontSize);
    // console.log(fontValue);

    const width = window.innerWidth;
    if (320 <= width && width <= 479) {
        htmlFontSize.style.fontSize = '12px';
        logoCenter(0);
    }
    else if (480 <= width && width <= 599) {
        htmlFontSize.style.fontSize = '14px';
        logoCenter(0);
    }
    else if (600 <= width && width <= 800) {
        htmlFontSize.style.fontSize = '14px';
        logoCenter(0);
    }
    else if (801 <= width && width <= 900) {
        htmlFontSize.style.fontSize = '14px';
        logoCenter(0);
    }
    else if (901 <= width && width <= 1024) {
        htmlFontSize.style.fontSize = '14px';
        logoCenter(1);
    }
    else if (1025 <= width && width <= 1280) {
        htmlFontSize.style.fontSize = '16px';
        logoCenter(1);
    }
    else if (1281 <= width && width <= 1499) {
        htmlFontSize.style.fontSize = '16px';
        logoCenter(1);
    }
    else if (1500 <= width && width <= 2099) {
        htmlFontSize.style.fontSize = '16px';
        logoCenter(1);
    }
    else if (2100 <= width && width <= 2599) {
        htmlFontSize.style.fontSize = '18px';
        logoCenter(1);
    }
    else if (2600 <= width && width <= 3099) {
        htmlFontSize.style.fontSize = '24px';
        logoCenter(1);
    }
    else if (3100 <= width && width <= 3599) {
        htmlFontSize.style.fontSize = '30px';
        logoCenter(1);
    }
    else if (3600 <= width) {
        htmlFontSize.style.fontSize = '34px';
        logoCenter(1);
    }
}
window.addEventListener('resize', responsiveEvent);
responsiveEvent();

// #################### Responsive Body ####################

function resizeAbout() {
    const screenWidth = window.screen.width;
    const aboutPara = document.querySelectorAll("#about p");
    const aboutHeader = document.querySelectorAll("#about h1");
    if (screenWidth >= 1500) {
        for(let i = 0; i < aboutPara.length; i++) {
            aboutPara[i].style.fontSize = "1rem";
        }
        for(let i = 0; i < aboutHeader.length; i++) {
            aboutHeader[i].style.fontSize = "1.5rem";
        }
    }
    else if (screenWidth >= 1000 && screenWidth < 1500) {
        for(let i = 0; i < aboutPara.length; i++) {
            aboutPara[i].style.fontSize = "0.9rem";
        }
        for(let i = 0; i < aboutHeader.length; i++) {
            aboutHeader[i].style.fontSize = "1.38rem";
        }
    }
    else if (screenWidth < 1000) {
        for(let i = 0; i < aboutPara.length; i++) {
            aboutPara[i].style.fontSize = "1.3rem";
        }
        for(let i = 0; i < aboutHeader.length; i++) {
            aboutHeader[i].style.fontSize = "2rem";
        }
    }
}
window.addEventListener("resize", resizeAbout);
resizeAbout();
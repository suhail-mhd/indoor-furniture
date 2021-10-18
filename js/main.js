// menuToggle 

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navItem = document.querySelector('.nav-item');

menuBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

// darkMode

const icon = document.querySelector('.theme');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        icon.src ="img/sun.png";
    }else {
        icon.src ="img/moon.png";
    }
});
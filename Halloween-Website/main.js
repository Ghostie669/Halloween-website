let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('.menu'),
    sections = document.querySelectorAll('section'),
    navLi = document.querySelectorAll('.navbar-left li a'),
    toTopBtn = document.querySelector('#to-top');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.onscroll = function () {
    if (this.scrollY >= 300) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
}

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.dataset.link == current) {
            li.classList.add('active');
        }
    });
});

//Loader Function 
function loader() {
    document.querySelector('.loader').classList.add('fade-out');
}

// window.onload = function() {
//     const container = document.querySelector('.loader');
// for (let i = 0; i < 10; i++) { // Adjust the number of images as needed
//     let img = document.createElement('img');
//     img.src = 'preloader1.png';
//     img.classList.add('container');

//     // Random positions
//     img.style.top = Math.random() * 100 + 'vh'; // Random vertical position
//     img.style.left = Math.random() * 100 + 'vw'; // Random horizontal position

//     container.appendChild(img);
// }
// }

function fadeOut() {
    setInterval(loader, 2500);
}

window.onload = fadeOut();
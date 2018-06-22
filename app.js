logo hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.src = 'images/logo_hover.png';
});

logo.addEventListener('mouseleave', () => {
   logo.src = 'images/logo.png';
});
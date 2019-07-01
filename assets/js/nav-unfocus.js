// NAV UNFOCUS ONCLICK

var navLinks = document.querySelectorAll('.site-nav__link');
var navControl = document.getElementById('site-nav__control');

function closeNav() {
    navControl.checked = false;
}

for (var i=0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeNav);
}

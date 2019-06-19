// SCROLL LINKS

'use strict';

function scrollIt(a) {
    var c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 200,
        d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 'linear',
        e = arguments[3],
        f = {
            easeOutQuad: function easeOutQuad(m) {
                return m * (2 - m)
            }
        },
        g = window.pageYOffset,
        h = 'now' in window.performance ? performance.now() : new Date().getTime(),
        i = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
        j = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
        k = 'number' == typeof a ? a : a.offsetTop,
        l = Math.round(i - k < j ? i - j : k);

    function b() {
        var m = 'now' in window.performance ? performance.now() : new Date().getTime(),
            n = Math.min(1, (m - h) / c),
            o = f[d](n);
        return window.scroll(0, Math.ceil(o * (l - g) + g)), window.pageYOffset === l ? void(e && e()) : void requestAnimationFrame(b)
    }
    return !1 == 'requestAnimationFrame' in window ? (window.scroll(0, l), void(e && e())) : void b()
}   

function getAnchor(link) {
    return (link.split('#').length > 1) ? link.split('#')[1] : null
}

var siteNavLinks = document.querySelectorAll(".home .site-nav__link--internal");
var siteNavControl = document.getElementById("site-nav__control");

siteNavLinks.forEach(function(link) {
    var b = link.href,
        c = getAnchor(b),
        d = document.getElementById(c);
        link.addEventListener("click", function(link) {
            link.preventDefault(), scrollIt(d, 800, "easeOutQuad");
            link.target.blur();
            siteNavControl.checked = !siteNavControl.checked;
        })
});

var introLink = document.getElementById("site-header__link-intro");
var introSection = document.getElementById("site-header__organisation");

if (introLink) {
    introLink.addEventListener("click", function(e) {
        e.preventDefault(), scrollIt(introSection, 800, "easeOutQuad");
        e.target.blur();
    })
}

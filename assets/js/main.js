// IE detection

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE11) {
  console.log("IE browser");
  document.body.classList.add('ie');
}


// DETECT CONTENT LOADED

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('content-loaded');
});


// SCROLL LINKS

'use strict';function scrollIt(a){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:200,d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'linear',e=arguments[3],f={linear:function linear(m){return m},easeInQuad:function easeInQuad(m){return m*m},easeOutQuad:function easeOutQuad(m){return m*(2-m)},easeInOutQuad:function easeInOutQuad(m){return 0.5>m?2*m*m:-1+(4-2*m)*m},easeInCubic:function easeInCubic(m){return m*m*m},easeOutCubic:function easeOutCubic(m){return--m*m*m+1},easeInOutCubic:function easeInOutCubic(m){return 0.5>m?4*m*m*m:(m-1)*(2*m-2)*(2*m-2)+1},easeInQuart:function easeInQuart(m){return m*m*m*m},easeOutQuart:function easeOutQuart(m){return 1- --m*m*m*m},easeInOutQuart:function easeInOutQuart(m){return 0.5>m?8*m*m*m*m:1-8*--m*m*m*m},easeInQuint:function easeInQuint(m){return m*m*m*m*m},easeOutQuint:function easeOutQuint(m){return 1+ --m*m*m*m*m},easeInOutQuint:function easeInOutQuint(m){return 0.5>m?16*m*m*m*m*m:1+16*--m*m*m*m*m}},g=window.pageYOffset,h='now' in window.performance?performance.now():new Date().getTime(),i=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),j=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName('body')[0].clientHeight,k='number'==typeof a?a:a.offsetTop,l=Math.round(i-k<j?i-j:k);function b(){var m='now' in window.performance?performance.now():new Date().getTime(),n=Math.min(1,(m-h)/c),o=f[d](n);return window.scroll(0,Math.ceil(o*(l-g)+g)),window.pageYOffset===l?void(e&&e()):void requestAnimationFrame(b)}
    return!1=='requestAnimationFrame' in window?(window.scroll(0,l),void(e&&e())):void b()}
    function getAnchor(link){return(link.split('#').length>1)?link.split('#')[1]:null}
    var siteNavLinks=document.querySelectorAll(".site-nav__link");siteNavLinks.forEach(function(a){var b=a.href,c=getAnchor(b),d=document.getElementById(c);a.addEventListener("click",function(a){a.preventDefault(),scrollIt(d,800,"easeOutQuad");a.target.blur()})});
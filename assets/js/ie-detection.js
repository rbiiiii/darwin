// IE detection

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE11) {
  console.log("IE browser");
  document.body.classList.add('ie');
}
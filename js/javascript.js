/* funçao abrir e fechar navbar */
var ul = document.querySelector('nav ul');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }
    else {
        ul.classList.add('open');
    }
}

/* Função do acordeon */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
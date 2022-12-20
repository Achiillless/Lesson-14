$(document).ready(function(){
    $('.phone').mask('+38(000)-000-00-00');
    $('select').niceSelect();
})

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
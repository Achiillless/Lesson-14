$(document).ready(function(){
    $('.phone').mask('+38(000)-000-00-00');
    $('select').niceSelect();
})

$(document).ready(function(){

  $('.single-item').slick();
    
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
var popup_login = document.getElementById('popup_form');
var close = document.getElementById('close_btn');

window.addEventListener("load", function() {
    setTimeout(function () {
        popup_login.classList.add('anyname');
    },5000)
})
close.addEventListener("click", function() {
    popup_login.classList.remove('anyname');
})

function myFunction(){
    window.location="page.html"
}

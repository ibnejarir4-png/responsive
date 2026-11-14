var hamburger = document.querySelector(".hamburger")
var cross = document.querySelector(".cross")
var toplink = document.querySelector(".toplink")

function mobilebutton() {
    toplink.classList.toggle("show")

    if (toplink.classList.contains('show')) {
        hamburger.style.display = 'none';
        cross.style.display = "block";
    }

    else {
        hamburger.style.display = 'block';
        cross.style.display = "none";
    }


}
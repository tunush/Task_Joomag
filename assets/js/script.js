let logos = document.getElementsByClassName("logos");
let logo = document.getElementsByClassName("logo-block");
let current = 0;

//this function hides and shows the logos in the Trusted By Section
function fade() {
    for (var i = 0; i < logos.length; i++) {
        logos[i].style.display = (logos[i].style.display === "block") ? 'none' : 'block';
    }

    setTimeout("fade()", 3000);
}

//this function hides and shows the logos in the Trusted By Section on mobile devices
function fadeInMobile() {
    logo[current].style.display = "none";
    logo[current + 1].style.display = "none";

    current = (current + 2)%logo.length;

    logo[current].style.display = "block";
    logo[current + 1].style.display = "block";

    setTimeout("fadeInMobile()", 3000);
}

$(function() {
    if ($(window).width() > 768) {
        logos[0].style.display = "none";
        logos[1].style.display = "block";
        fade();
    }

    if ($(window).width() < 768) {
        for (var i = 2; i < logo.length; i++) {
            logo[i].style.display = "none";
        }

        for (var i = 0; i < logo.length; i+=2) {
            logo[i].style.marginRight = "80px";
        }
        
        for (var i = 1; i < logo.length; i+=2) {
            logo[i].style.marginRight = 0;
        }

        setTimeout("fadeInMobile()", 3000);
    }
});

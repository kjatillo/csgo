mybutton = document.getElementById("scrollTop");
        
// Shows button after scrolling 20px down from the top of the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scrolls to top of page on button click
function topFunction() {
    document.body.scrollTop = 0;  // Safari
    document.documentElement.scrollTop = 0;  // Chrome, Firefox, IE and Opera
}

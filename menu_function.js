// Menu Function

function scrollToBlock(target) {
    var element = document.getElementById(target);
    window.scrollTo(element.offsetLeft, element.offsetTop - 80);
}

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    var headerMenu = document.getElementById('menu-bar-wrapper');
    if(document.documentElement.scrollTop > 125) {
        headerMenu.classList.add('keeping');
    }
    else {
        headerMenu.classList.remove('keeping');
    }
}
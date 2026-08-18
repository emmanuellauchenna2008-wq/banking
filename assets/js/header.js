const navbar = document.querySelector('.navbar');
const navtooglebtn = document.querySelector('.navtooglebtn');
console.log(navbar.classList)
console.log(navtooglebtn)
const icon = document.querySelector( '.navtooglebtn .fas');
navtooglebtn.addEventListener("click",
    function() {
        if (navbar.classList.contains("showNav")) {
            navbar.classList.remove("showNav");
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        else {
            navbar.classList.add("showNav");
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
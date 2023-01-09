const nav = document.querySelector('.navbar')
const button = document.querySelector('.navbar__button')
const bMenu = document.querySelector('.burgerMenu')
const bitem = document.querySelectorAll('li')
const bItem1 = document.querySelector('.span1')
const bItem2 = document.querySelector('.span2')
const bItem3 = document.querySelector('.span3')


window.onscroll = function () {
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
        nav.classList.add("nav-colored");

        nav.classList.remove("nav-transparent");
    }
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};

bitem.forEach(element => {
    element.addEventListener('click', function () {
        bMenu.classList.toggle('active')
        button.classList.toggle('open')

    })

});
button.addEventListener('click', function () {
    button.classList.toggle('open')

    bMenu.classList.toggle('active')
    // button.classList.toggle('buttonx')
    // bItem1.classList.toggle('burgeractivation')
    // bItem2.classList.toggle('burgeractivation2')
    // bItem3.classList.toggle('burgeractivation3')
    // bItem.forEach(element => {
    //     element.classList.toggle('burgeractivation')

});
// window.addEventListener('scroll', function () { 
//     if()
// }
// // $(document).ready(function () {
// //     $('.navbar__button').click(function () {
// //         $(this).toggleClass('open');
// //     });
// // });


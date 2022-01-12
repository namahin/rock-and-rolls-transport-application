// Uploaded image slider
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 14,
    nav: true,
    dots: false,
    navText: ['<img src="images/arrow-left.svg">', '<img src="images/arrow-right.svg">'],
    navContainerClass: "ui-slider-nav",
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
})
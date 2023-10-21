var swipper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
        rotate: 55,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

$(".slide-thumb.swiper-wrapper").mouseenter(function () {
    $(this).css("cursor", "pointer");
});

$(".slide-thumb.swiper-wrapper").click(function () {
    $(this).css("cursor", "pointer");
});

$(".slide-thumb.swiper-wrapper").mouseleave(function () {
    $(this).css("cursor", "pointer");
});

$(".slide-thumb.swiper-slide").mouseenter(function () {
    $(this).css("cursor", "pointer");
});

var swiper2 = new Swiper(".slide-info", {
    spaceBetween: 30,
    effect: "fade",
    clickable: true,
});

var swiper3 = new Swiper(".swiper-truyen", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

var triggerTabList = [].slice.call(document.querySelectorAll('#js-nh-tab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})


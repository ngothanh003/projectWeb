var swipper = new Swiper(".Mys", {
    effect: "coverflow",
    grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3",
      coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      loop: true,
});


$(".header").click(function () {

  $header = $(this);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(50, function () {
      //execute this after slideToggle is done
      //change text of header based on visibility of content div
      
  });

});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});





window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var banner = document.querySelector('.banner');
    // Adjust background position based on scroll position
    banner.style.backgroundPosition = 'center ' + (-scrollPosition / 2) + 'px';
});








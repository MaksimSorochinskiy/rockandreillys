$(function () {
    $(document).ready(function () {
        $(".nav-burger").click(function () {
            $(".nav-burger").toggleClass("burger-menu-active");
            $("header").toggleClass("header-show");
            $("body").toggleClass("body-lock");
        });
    });


    $(document).ready(function () {
        $('#imageSlider').slick({
            dots: false,
            arrows: false,
        });

        $('.accordion-button').click(function () {
            var buttonIndex = $(this).closest('.accordion-item').index();
            $('#imageSlider').slick('slickGoTo', buttonIndex); // Переключение слайда в слайдере
        });
    });


});

const player = new Plyr('#player');
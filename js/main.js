$(function () {
    $(document).ready(function () {
        $(".nav-burger").click(function () {
            $(".nav-burger").toggleClass("burger-menu-active");
            $("header").toggleClass("header-show");
            $("body").toggleClass("body-lock");
        });
    });
});
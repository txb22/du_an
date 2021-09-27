$(function () {
    $('.btn_click').click(function () {
        $('html, body').animate({ scrollTop: $('.section-3').offset().top }, 'slow');
        return false;
    });
});
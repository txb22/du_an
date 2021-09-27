$(function () {
    $('.btn_click').click(function () {
        $('html, body').animate({ scrollTop: $('section.section-3').offset().top }, 'slow');
        return false;
    });
});
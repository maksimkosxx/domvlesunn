$(document).ready(function () {


// PopUp

    $('.feedback-btn').on("click", function (event) {
        event.preventDefault();
        $('.wrapper-feedback').fadeIn(400,
            function () {
                $('.feedback')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });

    $('.feedback-close, .wrapper-feedback').on("click", function () {
        $('.feedback')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.wrapper-feedback').fadeOut(400);
                }
            );
    });

// HERO ADVANTAGES ANIMATION

    $('.hero-advantages__item').fadeIn(2700);

    $('.spincrement').spincrement({
        duration: 10000
    });

});

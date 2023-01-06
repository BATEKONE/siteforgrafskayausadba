let $button = $(this);

$('body').on('click', 'a[href="#"]', function () {
    $.ajax({
        success: function (response) {
            $('.order-success').addClass('active');
            setTimeout(function (){
                $('.order-success').removeClass('active');
            }, 3500);
        }
    });
    $('a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });
});
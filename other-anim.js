$(document).ready(function() {
    $('.s').hover(
        function() {
            $(this).css({
                'transform': 'scale(2)', 
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)', 
            });
        }
    );
});
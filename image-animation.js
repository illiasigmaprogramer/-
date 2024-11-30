function play_animation(selector) {
    $(selector).hover(
        function() {
            $(this).find('img').stop().animate({
                width: '120%',
                height: '120%',
                left: '-10%',
                top: '-10%'
            }, 300); 
        },
        function() {
            $(this).find('img').stop().animate({
                width: '100%',
                height: '100%',
                left: '0',
                top: '0'
            }, 300); 
        }
    );
}

play_animation('.image');
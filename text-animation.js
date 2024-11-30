function play_aimanion(selector) {
    $(selector).hover(
        function() {
            $(this).stop().animate({ fontSize: '35px' }, 300);
        }, 
        function() {
            $(this).stop().animate({ fontSize: '25px' }, 300);
        }
    );
}

play_aimanion('.text');
play_aimanion('.textL');


function play_aimanion_sp(selector) {
    $(selector).hover(
        function() {
            $(this).stop().animate({ fontSize: '45px' }, 300);
        }, 
        function() {
            $(this).stop().animate({ fontSize: '37px' }, 300);
        }
    );
}

play_aimanion_sp('.text-bigger');
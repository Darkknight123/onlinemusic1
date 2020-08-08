$(function() {

    function time() {
        var dt = new Date();
        var sec = dt.getSeconds();
        var min = dt.getMinutes();
        var hour = dt.getHours();
        var rsec = sec * 6;
        var rmin = min * 6;
        var rhour = hour * 30 + rmin / 12;


        $(".sec-div").css({
            "transform": "rotate(" + rsec + "deg)"
        });
        $(".min-div").css({
            "transform": "rotate(" + rmin + "deg)"
        });
        $(".hour-div").css({
            "transform": "rotate(" + rhour + "deg)"
        });
    }
    setInterval(time, 1000);

});
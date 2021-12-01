
$(document).ready(function () {

    //scroll to show
    myID2 = document.getElementById("part-2");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 450) {
            myID2.className = "home show-2"
        } else {
            myID2.className = "home hide-2"
        }
    };

    window.addEventListener("scroll", myScrollFunc);

    myID3 = document.getElementById("part-3");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 1000) {
            myID3.className = "home show-3"
        } else {
            myID3.className = "home hide-3"
        }
    };

    window.addEventListener("scroll", myScrollFunc);

    myID4 = document.getElementById("part-4");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 1400) {
            myID4.className = "home show-4"
        } else {
            myID4.className = "home hide-4"
        }
    };

    window.addEventListener("scroll", myScrollFunc);

    myID5 = document.getElementById("part-5");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 1900) {
            myID5.className = "home show-5"
        } else {
            myID5.className = "home hide-5"
        }
    };

    window.addEventListener("scroll", myScrollFunc);



});
// company page JS
$(document).ready(function () {
    $('.LIMSbtn').click(function () {
        $('#div1').hide();
        $('#div2').hide();
        $('.LIMS-solutions').show();
    });

    $('.backbtnHSM').click(function () {
        $('.HSM-solutions').hide();
        $('#div2').show();
        $('#div1').show();
    });

    $('.HSMbtn').click(function () {
        $('#div2').hide();
        $('#div1').hide();
        $('.HSM-solutions').show();
    });

    $('.backbtnLIMS').click(function () {
        $('.LIMS-solutions').hide();
        $('#div1').show();
        $('#div2').show();
    });

    $('#HSM1').click(function () {
        $('#sol1').hide();
        $('#sol2').show();
    });

    $('#backbtnsol-HSM').click(function () {
        $('#sol2').hide();
        $('#sol1').show();
    });

    $('#HSM2').click(function () {
        $('#sol3').hide();
        $('#sol4').show();
    });

    $('#backbtnsol4-HSM').click(function () {
        $('#sol4').hide();
        $('#sol3').show();
    });

    $('#HSM3').click(function () {
        $('#sol5').hide();
        $('#sol6').show();
    });

    $('#backbtnsol6-HSM').click(function () {
        $('#sol6').hide();
        $('#sol5').show();
    });

    $('#HSM4').click(function () {
        $('#sol7').hide();
        $('#sol8').show();
    });

    $('#backbtnsol8-HSM').click(function () {
        $('#sol8').hide();
        $('#sol7').show();
    });

    $('#HSM5').click(function () {
        $('#sol9').hide();
        $('#sol10').show();
    });

    $('#backbtnsol10-HSM').click(function () {
        $('#sol10').hide();
        $('#sol9').show();
    });

    $('#HSM6').click(function () {
        $('#sol11').hide();
        $('#sol12').show();
    });

    $('#backbtnsol12-HSM').click(function () {
        $('#sol12').hide();
        $('#sol11').show();
    });
});
// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        400: {
            items: 1,
            margin: 0,
            nav: false
        },
        600: {
            items: 1,
            margin: 0,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
something
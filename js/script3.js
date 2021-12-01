    /**
 * getting the modal element
 * ___
 * querySelector('.modal') will return the first element
 * with the modal class
 */
const modal = document.querySelector('.modal');
/**
 * getting the open button
 * ___
 * will get the open button by the id
 */
const openButton = document.getElementById('open-modal')
/**
 * getting the close button
 * ___
 * will get the close button by the id
 */
const closeButton = document.getElementById('close-modal');
/**
 * adding a click listener to the open button(on click)
 */
openButton.addEventListener('click', () => {
    /**
     * will add the .modal--open class to the modal
     */
    modal.classList.add('modal--open')
})

/**
 * adding a click listener to the close button (onclick)
 */
closeButton.addEventListener('click', () => {
    /**
     * will remove the .modal--open class to the modal
     */
    modal.classList.remove('modal--open')
})

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

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    

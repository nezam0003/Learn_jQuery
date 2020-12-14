// jQuery("button").click(() => {
//     console.log("hello");
// });

jQuery.noConflict();
jQuery(function($) {
    // Hide image
    $('#btn-hide').click(() => {
        $('#blog-1').hide(2000, () => console.log('image has been hidden'));
    });
    // show image
    $('#btn-show').click(() => {
        $('#blog-1').show(2000, () => console.log('image has been showed'));
    });
    // hide and show -- Toggle
    $('#btn-toggle').click(() => {
        $('#blog-1').toggle(2000, () => console.log('image hide/show'));
    });

    // fade out
    $('#btn-fadeout').click(() => {
        $('#blog-1').fadeOut(2000);
    });
    // fade in
    $('#btn-fadein').click(() => {
        $('#blog-1').fadeIn(2000);
    });
    // fade TOggle
    $('#btn-fadetoggle').click(() => {
        $('#blog-1').fadeToggle(2000);
    });
    // fade TO
    $('#btn-fadeto').click(() => {
        $('#blog-1').fadeTo(2000, 0.5);
    });
    // slide down
    $('#btn-slidedown').click(() => {
        $('#blog-1').slideDown(1000);
    });
    // slide up
    $('#btn-slideup').click(() => {
        $('#blog-1').slideUp(1000);
    });
    // slide Toggle
    $('#btn-slidetoggle').click(() => {
        $('#blog-1').slideToggle(1000);
    });

    // Animate- perform a custom animation of a set of css properties
    $("#btn-animate").click(() => {
        $('#blog-2').animate({ left: "+=80" }, 1000);
    });
});
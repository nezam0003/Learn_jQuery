// jQuery("button").click(() => {
//     console.log("hello");
// });

jQuery.noConflict();
jQuery(function($) {
    // mouse events
    $('#mybtn').click(() => {
        console.log('Mouse click event occurs');
    });
    // mouse double click events
    $('.my-btn').dblclick(() => {
        console.log('Mouse double click event occurs');
    });

    // Mouse Enter events
    $('.my-btn').mouseenter(() => {
        console.log('Mouse entered');
    });

    // Mouse Leave events
    $('.my-btn').mouseleave(() => {
        console.log('Mouse leaved');
    });

});
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

    // keyboard event
    $("#name").keypress((e) => console.log(e.type));
    $("#name").keyup((e) => console.log(e.type));
    $("#name").keydown((e) => console.log(e.type));

    // form events
    // focus events
    $('#fname').focus(() => console.log('focus field'));
    // blur events
    $('#fname').blur(() => console.log('blur field'));
    // submit events
    $('#myForm').submit((e) => {
        e.preventDefault();
        console.log('successfully submitted')
    });

    // window events
    $(window).resize(() => console.log('window resized'));

});
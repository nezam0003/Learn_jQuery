// jQuery("button").click(() => {
//     console.log("hello");
// });

jQuery.noConflict();
jQuery(function($) {
    // using id selector
    $("#mybtn").on("click", () => {
        console.log('id button clicked');
    });
    // using class selector
    $(".my-btn").on('click', () => console.log("class button clicked"));
    $('p').on('click', () => console.log("element p clicked"));
});
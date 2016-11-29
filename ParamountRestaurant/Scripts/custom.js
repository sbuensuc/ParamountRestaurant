//Filename: custom.js
//Author Name: Sam Buensuceso
//Website Name: http://paramount-bistro.azurewebsites.net/
//File Description: custom js 

//Custom JS code

//JS to handle image modal
$(function () {
    $('.pop').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});
$(document).ready(function () {

//login modal
    $('#user-modal-open, .show-user-modal .user-modal-backdrop, #user-modal-close')
        .click(function () {
            $('body').toggleClass('show-user-modal');
            $('.navbar-collapse').removeClass('open');
            $('.user-modal-content').load($(this).data("remote"));
            // TODO
            // https://stackoverflow.com/questions/23494468/detect-different-kind-of-scrollbars-eg-normal-hidden-osx
            // https://davidwalsh.name/detect-scrollbar-width
        });

});
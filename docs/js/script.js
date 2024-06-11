$(document).ready(function() {
    const modalWrapper = $('.modal-wrapper');
    const modalClose = $('.modal_close');
    const modalBtn = $('#modal-btn');
    modalBtn.on('click', function() {
        modalWrapper.addClass('show');
    });

    modalClose.on('click', function() {
        modalWrapper.removeClass('show');
    });

    modalWrapper.on('click', function(event) {
        if ($(event.target).is(modalWrapper)) {
            modalWrapper.removeClass('show');
        }
    });
});

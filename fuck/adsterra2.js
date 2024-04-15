function openFirstPopup() {
    var popup = window.open('https://bit.ly/kirstybollington', '_blank');

    // Check if the popup is closed or undefined
    if (popup === null || typeof popup === 'undefined' || popup.closed) {
        // Retry opening the popup after a short delay
        setTimeout(function() {
            popup = window.open('https://bit.ly/kirstybollington', '_blank');
        }, 1);
    }
}

window.addEventListener('load', openFirstPopup);

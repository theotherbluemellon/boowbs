function openFirstPopup() {
    var popup = window.open('https://www.boowbs.com/2024/02/boowbs.html', '_blank');

    // Check if the popup is closed or undefined
    if (popup === null || typeof popup === 'undefined' || popup.closed) {
        // Retry opening the popup after a short delay
        setTimeout(function() {
            popup = window.open('https://www.boowbs.com/2024/02/boowbs.html', '_blank');
        }, 1);
    }
}
window.addEventListener('load', openFirstPopup);

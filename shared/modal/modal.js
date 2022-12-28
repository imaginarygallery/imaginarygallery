function initModals() {
    // Get all modal divs
    const modals = document.querySelectorAll('[id^="Modal"]');
    modals.forEach(modal => {
        const modalName = modal.id.slice(5);
        const openButtons = document.querySelectorAll(`[data-modal-open=Modal${modalName}]`);
        openButtons.forEach(openButton => {
            openButton.addEventListener('click', event => {
                event.preventDefault();
                modal.classList.replace('closed', 'open');
            })
        });
        const closeButtons = document.querySelectorAll(`[data-modal-close=Modal${modalName}]`);
        closeButtons.forEach(closeButton => {
            closeButton.addEventListener('click', event => {
                event.preventDefault();
                modal.classList.replace('open', 'closed');
            })
        });
    });
}

document.addEventListener("DOMContentLoaded", initModals);

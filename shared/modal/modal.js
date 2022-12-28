function initModals() {
    // Get all modal divs
    const modals = document.querySelectorAll('[id^="Modal"]');
    modals.forEach(modal => {
        const modalName = modal.id.slice(5);

        modal.addEventListener('click', event => {
            event.preventDefault();
            modal.classList.replace('open', 'closed');
        });
        modal.querySelector('.modal-content').addEventListener('click', event => {
            event.stopPropagation();
        });

        const openButtons = document.querySelectorAll(`[data-modal-open=Modal${modalName}]`);
        openButtons.forEach(openButton => {
            openButton.addEventListener('click', event => {
                event.preventDefault();
                modal.classList.replace('closed', 'open');
            })
        });

        modal.querySelector('.close').addEventListener('click', event => {
            event.preventDefault();
            modal.classList.replace('open', 'closed');
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

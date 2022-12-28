function initModals() {
    console.log('Modals are go!');
    // Get all modal divs
    const modals = document.querySelectorAll('[id^="Modal"]');
    modals.forEach(modal => {
        console.log(modal);
        const modalName = modal.id.slice(5);
        console.log(modalName);
        const openButtons = document.querySelectorAll(`[data-modal-open=Modal${modalName}]`);
        console.log(openButtons);
        openButtons.forEach(openButton => {
            console.log(openButton);
            openButton.addEventListener('click', event => {
                console.log(`Opened modal ${modalName}`);
                event.preventDefault();
                modal.classList.replace('closed', 'open');
                console.log(modal);
            })
        });
        const closeButtons = document.querySelectorAll(`[data-modal-close=Modal${modalName}]`);
        closeButtons.forEach(closeButton => {
            closeButton.addEventListener('click', event => {
                console.log(`Closed modal ${modalName}`);
                event.preventDefault();
                modal.classList.replace('open', 'closed');
            })
        });
    });
}

document.addEventListener("DOMContentLoaded", initModals);


window.onload = function() {
    window.scroll({top: document.body.scrollHeight});
    document.getElementById('loading-panel').classList.add('loaded');
    console.log("Loaded!");
}

console.log("Hello, world!");

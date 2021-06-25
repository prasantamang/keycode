  
window.addEventListener('keydown', clicked);

function clicked(event){
    const keyCode = document.querySelector('.code-key');
    keyCode.innerHTML = event.which;

    const eventKey = document.querySelector('.event-key');
    eventKey.innerHTML = event.key;

    const eventWhich = document.querySelector('.event-which');
    eventWhich.innerHTML = event.which;
}
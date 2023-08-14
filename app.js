const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body',);

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = '#ddd';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = '#080513';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})
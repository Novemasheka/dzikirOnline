let counter = document.querySelector('#count')
let count = document.querySelector('#click')

let cnt = 0;
let cntW = 1;
let reset = document.querySelector('#reset')
function btn() {
    cnt++;
    counter.textContent = cnt;
}
function kurang() {
    cnt--;
    counter.textContent = cnt;
}
function resete() {
    cnt *=0;
    counter.innerHTML = cnt;
}
function min() {
    cnt--;
    counter.textContent = cnt;
}
window.addEventListener('keydown', (e) => {
    console.log(e.key)
    switch(e.key) {
        case ' ':
            btn();
        break;
        case 'Backspace':
        kurang();
        break;
        case 'r':
            resete()
    }
});
reset.addEventListener('click', resete)
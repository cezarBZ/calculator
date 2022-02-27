const display = document.querySelector('#display')


const insert = (num) => {
    let number = display.innerHTML 
    display.innerHTML = number + num;
}

const cleanDisplay = () => {
    display.innerHTML = ''
}
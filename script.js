const display = document.querySelector('#display')


const insert = (num) => {
    let number = display.innerHTML 
    display.innerHTML = number + num;
}

const cleanDisplay = () => {
    display.innerHTML = ''
}

const back = () => {
    let result = display.innerHTML
    display.innerHTML = result.substring(0, result.length -1);
}

const calc = () => {
    let result = display.innerHTML
    
    if(result) {
        display.innerHTML = eval(result)
    }
}
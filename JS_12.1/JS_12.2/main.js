const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let inputValue = input.value;
    let regex = /^[\w.-]+@[\w.-]+\.\w+$/;

    if(regex.test(inputValue)){
        output.innerText = 'valid email';
    } else {
        output.innerText = 'not a valid email';
    }
})
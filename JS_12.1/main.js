let output = document.getElementById('output');
let search = document.getElementById('search');
let replace = document.getElementById('replace');
let button = document.querySelector('button');

function lookup(){
   let outputText = output.innerText;
   let searchText = search.value;
   const regex = new RegExp(search.value, 'gi');

   if(searchText.match(regex)){
    let newValue = searchText.replace(regex, searchText);
    output.textContent = newValue;
   }
}

button.addEventListener('click', ()=>{
    lookup();
})
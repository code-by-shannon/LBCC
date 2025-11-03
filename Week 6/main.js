const output = document.querySelector('.output');
output.textContent = 'i changed this h1';
output.classList.add("red");
output.id = 'tester';
output.style.backgroundColor = 'blue';
let documentURL = document.URL;
console.log(documentURL);
output.textContent = documentURL;

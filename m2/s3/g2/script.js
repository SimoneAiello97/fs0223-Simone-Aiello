/* Esercizio 1 */
let input = document.querySelector('.form');
let nome = document.querySelector('#inputName');
let saveBtn = document.querySelector('#saveBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let names = [];

const addName = () => {
    names.push(nome.value);
    localStorage.setItem("NAME", JSON.stringify(names));
    let lista =document.createElement('ul');
    let nomeInserito = document.createElement('li')
    nomeInserito.innerText = "Il nome inserito è " + names[names.length - 1];
    lista.appendChild(nomeInserito);
    input.prepend(nomeInserito);
    nome.value = ""
};

const deleteName = () => {
    names.pop();
    localStorage.removeItem("NAME");
    input.value = ""
    let nomeInserito = document.querySelectorAll('li')
    nomeInserito.forEach(nome => {nome.remove()});
};

saveBtn.addEventListener("click", addName);
deleteBtn.addEventListener("click", deleteName);

/* Esercizio 2 */

let time = sessionStorage.getItem("TIME") || 0;
let timer = document.querySelector('#timer');

window.onload = () => {
    const aumentoTimer = () => {
    time ++;
    sessionStorage.setItem("TIME", time);
    timer.innerText = "Tempo: " + time;
    }
    setInterval(aumentoTimer, 1000);
}


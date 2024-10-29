const numeroInput = document.getElementById('numeroInput');
const agregarBtn = document.getElementById('agregarBtn');
const resetearBtn = document.getElementById('resetearBtn');
const numerosList = document.getElementById('numerosList');

// Cargar números desde el almacenamiento local al iniciar
const numerosGuardados = JSON.parse(localStorage.getItem('numeros')) || [];
numerosGuardados.forEach(numero => {
const li = document.createElement('li');
li.textContent = numero;
numerosList.appendChild(li);
});

// Función para agregar un número
function agregarNumero() {
const nuevoNumero = numeroInput.value;
numerosGuardados.push(nuevoNumero);
localStorage.setItem('numeros', JSON.stringify(numerosGuardados));

const li = document.createElement('li');
li.textContent = nuevoNumero;
numerosList.appendChild(li);

numeroInput.value = '';
}

// Función para resetear
function resetear() {
numerosGuardados.length = 0;
localStorage.removeItem('numeros');
numerosList.innerHTML = '';
}

agregarBtn.addEventListener('click', agregarNumero);
resetearBtn.addEventListener('click', resetear);
const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

//Fiz o cálculo da raiz quadrada, mas também posso usar o módulo Math.sqrt(numero)
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
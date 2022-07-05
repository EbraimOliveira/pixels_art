// Criar cores aleatórias para a paleta:

const recebeCor = document.getElementsByClassName('cor-aleatoria');

window.onload = function () {
  for (let i = 0; i < recebeCor.length; i += 1) {
    const caracteresGeradores = '0123456789ABCDEF';
    let corGerada = '#';
    for (let index = 0; index < 6; index += 1) {
      corGerada += caracteresGeradores[Math.floor(Math.random() * 16)];
    }

    recebeCor[i].style.backgroundColor = corGerada;
  }
};

// Criar  os quadrados:

function criaQuadrados() {
  const quadrados = document.getElementById('pixel-board').children;
  for (let index = 0; index < quadrados.length; index += 1) {
    quadrados[index].className = 'pixel';
  }
}
criaQuadrados();

// Seleciona as cores:

const paletaDeCores = document.getElementsByClassName('color');

function selecionaCores() {
  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', function () {
      if (paletaDeCores[index].classList.contains('seleciona') === false) {
        paletaDeCores[index].classList.add('seleciona');
      } else {
        paletaDeCores[index].classList.remove('seleciona');
      }
    });
  }
}
selecionaCores();

// Aplica as cores:

const quadradosBrancos = document.getElementsByClassName('pixel');

for (let index = 0; index < quadradosBrancos.length; index += 1) {
  quadradosBrancos[index].addEventListener('click', function (evento) {
    const corSelecionada = document.querySelector('.seleciona');
    evento.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  });
}

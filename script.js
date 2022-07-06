// CRIA CORES ALEATÓRIAS PARA A PALETA:

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

// CRIA OS PIXELS:

const quadradoDePixels = document.getElementById('pixel-board');
function criaPixels(n) {
  for (let index = 0; index < n * n; index += 1) {
    //  Criar os elementos uma quantidade de vezes igual a n * n tem  o mesmo efeito que usar dois laços FOR nesse caso, mas é melhor pois diminui o código.
    // for (let index2 = 0; index2 < n; index2 += 1) {

    const pixels = document.createElement('div'); //cria o pixel (quadradinho que receberá a cor).
    pixels.classList.add('pixel'); //adiciona o style apropriado.
    const larguraDoQuadrado = 44 * n; // 44 é o tamanho de cada pixel (width + margin + border)
    quadradoDePixels.style.width = `${larguraDoQuadrado}px`; //define o tamanho do quadradoDePixels de forma dinâmica, para mudar de acordo com a aquantidade de elementos.
    quadradoDePixels.appendChild(pixels);
    // }
  }
}
criaPixels(5);

// SSELECIONA AS CORES NA PALETA:

const corPreta = document.getElementsByClassName('black')[0];
corPreta.style.backgroundColor = ' black';
corPreta.classList.add('selected');
const paletaDeCores = document.getElementsByClassName('color');

for (let index = 0; index < paletaDeCores.length; index += 1) {
  paletaDeCores[index].addEventListener('click', function () {
    if (paletaDeCores[index].classList.contains('selected') === false) {
      paletaDeCores[index].classList.add('selected');
      for (let index2 = 0; index2 < paletaDeCores.length; index2 += 1) {
        if (
          paletaDeCores[index2] !== paletaDeCores[index] &&
          paletaDeCores[index2].classList.contains('selected') === true
        ) {
          paletaDeCores[index2].classList.remove('selected');
        }
      }
    }
  });
}

// APLICA AS CORES AOS PIXELS :

const quadradosBrancos = document.getElementsByClassName('pixel');

for (let index = 0; index < quadradosBrancos.length; index += 1) {
  quadradosBrancos[index].addEventListener('click', function (evento) {
    const corSelecionada = document.getElementsByClassName('selected')[0];
    evento.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  });
}

// BOTÃO 'LIMPAR' :

function limpaOsQuadros() {
  for (let i = 0; i < quadradosBrancos.length; i += 1) {
    quadradosBrancos[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
const botaoClear = document.getElementById('clear-board');
botaoClear.addEventListener('click', limpaOsQuadros);

//Cria Imput:

// const vQvButton = document.getElementById('generate-board');
// vQvButton.addEventListener('keypress', function (e) {
//   if (caixinhaDeCompromissos.value === '') {
//     alert('Board inválido!');
//   } else {
//   }
// });

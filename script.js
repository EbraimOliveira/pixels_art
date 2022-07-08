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

// CRIA OS PIXELS, APLICA AS CORES AOS PIXELS & BOTÃO 'LIMPAR' :

const quadradoDePixels = document.getElementById('pixel-board');
function criaPixels(n) {
  for (let index = 0; index < n * n; index += 1) {
    //  Criar os elementos uma quantidade de vezes igual a n * n tem  o mesmo efeito que usar dois laços FOR nesse caso, mas é melhor pois diminui o código.
    // for (let index2 = 0; index2 < n; index2 += 1) {
    const pixels = document.createElement('div'); // cria o pixel.
    pixels.classList.add('pixel'); // adiciona o style apropriado.
    const larguraDoQuadrado = 44 * n; // 44 é o tamanho de cada pixel (width + margin + border)
    quadradoDePixels.style.width = `${larguraDoQuadrado}px`; // define o tamanho do quadradoDePixels de forma dinâmica, para mudar de acordo com a aquantidade de elementos.
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
  paletaDeCores[index].addEventListener('click', () => {
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

// APLICA AS CORES AOS PIXELS:

quadradoDePixels.addEventListener('click', (e) => {
  const corSelecionada = document.getElementsByClassName('selected')[0];
  if (e.target !== document.getElementById('pixel-board')) {
    e.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  }
});

// LIMPA OS PIXELS

function limpaOsQuadros() {
  for (let i = 0; i < quadradosBrancos.length; i += 1) {
    quadradosBrancos[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
const botaoClear = document.getElementById('clear-board');
botaoClear.addEventListener('click', limpaOsQuadros);

// IMPUT PARA MUDAR O QUADRO DE PIXELS:

// É preciso apagar o quadro anterior senão o novo valor atribuido no input apenas soma ao que já existe:

function apagaQuadradoAnterior() {
  while (quadradoDePixels.hasChildNodes()) {
    // O método hasChildNodes() retorna um valor booleano indicando se o Node fornecido possui nodes filhos ou não.
    quadradoDePixels.removeChild(quadradoDePixels.lastChild);
  }
}

const botaoMudaTamanho = document.getElementById('generate-board');
const valorDoInput = document.getElementById('board-size');
botaoMudaTamanho.addEventListener('click', () => {
  apagaQuadradoAnterior();
  let novoQuadro = valorDoInput.value;

  if (novoQuadro === '') {
    alert('Board inválido!');
  } else if (novoQuadro < 5) {
    novoQuadro = 5;
  }
  if (novoQuadro > 50) {
    novoQuadro = 50;
  }

  criaPixels(novoQuadro);
});

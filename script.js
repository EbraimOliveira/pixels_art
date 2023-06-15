const colorPalette = document.getElementsByClassName('color');
const blackColorPalette = document.getElementsByClassName('black')[0];
const randomColorPalette = document.getElementsByClassName('cor-aleatoria');
const pixelBoard = document.getElementById('pixel-board');

window.onload = function createPallete() {
  Array.from(randomColorPalette).forEach((color) => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    color.style.backgroundColor = newColor;
  });
};

const selectBlackColor = () => {
  blackColorPalette.style.backgroundColor = 'black';
  blackColorPalette.classList.add('selected');
};
selectBlackColor();

const createPixels = (n) => {
  for (let i = 0; i < n * n; i += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    const boardWidth = 44 * n; // 44 é o tamanho de cada pixel (width + margin + border)
    pixelBoard.style.width = `${boardWidth}px`;
    pixelBoard.appendChild(pixels);
  }
};
createPixels(5);

const changeColor = (i) => {
  if (!colorPalette[i].classList.contains('selected')) {
    colorPalette[i].classList.add('selected');

    Array.from(colorPalette).forEach((color) => {
      if (color !== colorPalette[i] && color.classList.contains('selected')) {
        color.classList.remove('selected');
      }
    });
  }
};

Array.from(colorPalette).forEach((color, i) => {
  color.addEventListener('click', () => {
    changeColor(i);
  });
});

// APLICA AS CORES AOS PIXELS:

pixelBoard.addEventListener('click', (e) => {
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
  while (pixelBoard.hasChildNodes()) {
    // O método hasChildNodes() retorna um valor booleano indicando se o Node fornecido possui nodes filhos ou não.
    pixelBoard.removeChild(pixelBoard.lastChild);
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

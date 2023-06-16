const colorPalette = document.getElementsByClassName('color');
const blackColorPalette = document.getElementsByClassName('black')[0];
const randomColorPalette = document.getElementsByClassName('cor-aleatoria');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');

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

const removeSelected = (color) => {
  Array.from(colorPalette).forEach((color2) => {
    if (color2 !== color && color2.classList.contains('selected')) {
      color2.classList.remove('selected');
    }
  });
};

const addSelected = (color) => {
  if (!color.classList.contains('selected')) {
    color.classList.add('selected');
    removeSelected(color);
  }
};

const selectColor = () => {
  Array.from(colorPalette).forEach((color) => {
    color.addEventListener('click', () => {
      addSelected(color);
    });
  });
};
selectColor();

const applyColor = () => {
  pixelBoard.addEventListener('click', (e) => {
    const selectedColor = document.getElementsByClassName('selected')[0];
    if (e.target !== document.getElementById('pixel-board')) {
      e.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
};
applyColor();

const clearBoard = () => {
  clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    Array.from(pixels).forEach((pixel) => {
      pixel.style.backgroundColor = '#fff';
    });
  });
};
clearBoard();

// IMPUT PARA MUDAR O QUADRO DE PIXELS:

// É preciso apagar o quadro anterior senão o novo valor atribuido no input apenas soma ao que já existe:

function apagaQuadradoAnterior() {
  while (pixelBoard.hasChildNodes()) {
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

  createPixels(novoQuadro);
});

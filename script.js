//12 - Criar cores aleatórias para a paleta:

window.onload = function () {
  const recebeCor = document.getElementsByClassName('cor-aleatoria');
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

const quadrados = document.getElementById('pixel-board').children;
for (let index = 0; index < quadrados.length; index += 1) {
  quadrados[index].className = 'pixel';
}

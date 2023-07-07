const settingsBtn = document.getElementById('settings');
const optionsMenu = document.getElementById('options-menu');
const exitBtn = document.getElementById('exit');
const colorInput = document.getElementById('background-color');
const body = document.getElementById('body');
const title = document.getElementById('title');
const generateBoard = document.getElementById('generate-board');
const languageSelect = document.getElementById('language');
const englishOption = document.querySelector('#english');
const portugueseOption = document.querySelector('#portuguese');

document.addEventListener('DOMContentLoaded', () => {
  colorInput.value = '#f0f8ff';
});

const settings = () => {
  settingsBtn.addEventListener('click', () => {
    optionsMenu.style.display = optionsMenu.style.display === 'flex' ? 'none' : 'flex';
  });
};
settings();

const changeBackgroundColor = () => {
  colorInput.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    body.style.backgroundColor = selectedColor;
  });
};
changeBackgroundColor();

const exit = () => {
  exitBtn.addEventListener('click', () => {
    optionsMenu.style.display = 'none'
  });
};
exit();

const ifEnglish = () => {
  title.textContent = 'Color Palette';
  generateBoard.textContent = 'Create Board';
  previousColorsBtn.textContent = 'Previous Colors';
  refreshColorsBtn.textContent = 'Refresh Colors';
  clearButton.textContent = 'Clear';
  hoverDescription.textContent = 'Input a value between 1 and 40 to create a new board';
  settingsBtn.textContent = 'Settings';
  languageSelect.textContent = 'Language';
  englishOption.textContent = 'English';
  portugueseOption.textContent = 'Portuguese';
}

const ifPotuguese = () => {
  title.textContent = 'Paleta de Cores';
  generateBoard.textContent = 'Criar Tabuleiro';
  previousColorsBtn.textContent = 'Cores Anteriores';
  refreshColorsBtn.textContent = 'Atualizar Cores';
  clearButton.textContent = 'Limpar';
  hoverDescription.textContent = 'Escolha um valor entre 1 e 40 para criar um novo tabuleiro';
  settingsBtn.textContent = 'Configurações';
  languageSelect.textContent = 'Idioma:';
  englishOption.textContent = 'Inglês';
  portugueseOption.textContent = 'Português';
  // colorInput.textContent = 'Cor de fundo';
  exitBtn.textContent = 'Sair';
}

const changeLanguage = () => {
  languageSelect.addEventListener('change', () => {
    if (englishOption.selected) {
      ifEnglish()
    }
    if (portugueseOption.selected) {
      ifPotuguese()
    }
  });
};

changeLanguage();


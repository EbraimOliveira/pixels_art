const settingsBtn = document.getElementById('settings');
const optionsMenu = document.getElementById('options-menu');
const exitBtn = document.getElementById('exit');
const colorLabel = document.getElementById('background-color');
const generateBoard = document.getElementById('generate-board');
const languageSelect = document.getElementById('select');
const languageText = document.getElementById('language-text');
const portuguese = document.getElementById('portuguese');
const english = document.getElementById('english');
const backgroundColorText = document.getElementById('background-color-text');

document.addEventListener('DOMContentLoaded', () => {
  colorLabel.value = '#f0f8ff';
});

const settings = () => {
  settingsBtn.addEventListener('click', () => {
    optionsMenu.style.display = optionsMenu.style.display === 'flex' ? 'none' : 'flex';
  });
};
settings();

const changeBackgroundColor = () => {
  colorLabel.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    body.style.backgroundColor = selectedColor;
    console.log(body.style.backgroundColor);
  });
};
changeBackgroundColor();

const exit = () => {
  exitBtn.addEventListener('click', () => {
    optionsMenu.style.display = 'none';
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
  languageText.innerText = 'Language:';
  portuguese.textContent = 'Portuguese';
  english.textContent = 'English';
  backgroundColorText.innerText = 'Background Color:';
  exitBtn.textContent = 'Exit';
};

const ifPotuguese = () => {
  title.textContent = 'Paleta de Cores';
  generateBoard.textContent = 'Criar Tabuleiro';
  previousColorsBtn.textContent = 'Cores Anteriores';
  refreshColorsBtn.textContent = 'Atualizar Cores';
  clearButton.textContent = 'Limpar';
  hoverDescription.textContent = 'Escolha um valor entre 1 e 40 para criar um novo tabuleiro';
  settingsBtn.textContent = 'Configurações';
  languageText.innerText = 'Idioma:';
  portuguese.textContent = 'Português';
  english.textContent = 'Inglês';
  backgroundColorText.innerText = 'Cor de Fundo:';
  exitBtn.textContent = 'Sair';
};

const changeLanguage = () => {
  languageSelect.addEventListener('change', (e) => {
    if (e.target.value === 'english') {
      ifEnglish();
    }
    if (e.target.value === 'portuguese') {
      ifPotuguese();
    }
  });
};
changeLanguage();

const button = document.querySelector('#themeButton');
const background = document.querySelector('body');
const circles = document.querySelector('.background');
const counter = document.querySelector('.counter');

const greenTheme = {
    background: 'green',
    circlesColor: 'darkgreen',
    buttonColor: 'darkgreen',
    image: 'images/green.webp'
}

const redTheme = {
    background: 'red',
    circlesColor: 'darkred',
    buttonColor: 'darkred',
    image: 'images/red.webp'
}

const blueTheme = {
    background: 'blue',
    circlesColor: 'darkblue',
    buttonColor: 'darkblue',
    image: 'images/blue.png'
}

const themes = [greenTheme, redTheme, blueTheme];
let currentIndex = 0;

button.addEventListener('click', () => {
   // currentIndex++
  //  if(currentIndex >= themes.length){
  //      currentIndex = 0;
  //  }

    currentIndex = (currentIndex + 1) % themes.length;
    //modulo:
    //0 + 1 = 1 | 1 % 3 = 1
    //1 + 1 = 2 | 2 % 3 = 2
    //2 + 1 = 3 | 3 % 3 = 0

    let currentTheme = themes[currentIndex];
    counter.innerHTML = currentIndex;
    setTheme(currentTheme);
});

function setTheme(theme){
    background.style.backgroundColor = theme.background;
    circles.style.setProperty('--ball-color', theme.circlesColor);
    button.style.backgroundColor = theme.buttonColor;
    document.body.style.backgroundImage = `url(${theme.image})`;
    document.body.classList.add('background-image');
}

setTheme(themes[currentIndex]);
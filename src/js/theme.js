const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// localStorage.setItem('theme', JSON.stringify(Theme));
const savedSettings = localStorage.getItem('theme');
// const settedTheme = JSON.parse(savedSettings);
// console.log(settedTheme);

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
// console.dir(refs.checkbox);

refs.checkbox.addEventListener('input', toggler);

function toggler() {
  if (refs.checkbox.checked === true) {
    refs.body.classList.add('dark-theme');
  } else if (
    refs.checkbox.checked === false ||
    elem.classList.contains('dark-theme')
  ) {
    elem.classList.replace('dark-theme', 'light-theme');
  }
}
//   refs.body.classList.add('light-theme');

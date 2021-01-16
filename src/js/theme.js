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

refs.checkbox.addEventListener('change', toggler);

function toggler() {
  refs.body.classList.toggle('dark-theme');
}
//   refs.body.classList.add('light-theme');

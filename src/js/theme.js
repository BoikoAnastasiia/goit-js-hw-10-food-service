const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('theme', JSON.stringify(Theme));
const value = localStorage.getItem('theme');
// console.log(value);

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
console.dir(refs.checkbox);

refs.checkbox.addEventListener('input', toggler);

function toggler() {
  if (refs.checkbox.checked === true) {
    refs.body.classList.add('dark-theme');
  }
  refs.body.classList.add('light-theme');
}

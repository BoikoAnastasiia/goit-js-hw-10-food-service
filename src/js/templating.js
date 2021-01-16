import itemsTemp from '../templates.hbs';
import dishes from '../menu.json';
import '../styles.scss';
console.log(dishes);

const markup = itemsTemp(dishes);
console.log(markup);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);

Handlebars.registerHelper('list', function (items, options) {
  const itemsAsHtml = items.map(item => '<li>' + options.fn(item) + '</li>');
  return '<ul>\n' + itemsAsHtml.join('\n') + '\n</ul>';
});

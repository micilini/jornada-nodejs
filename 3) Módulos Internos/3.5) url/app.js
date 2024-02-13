/* Aplicação de Testes (app.js) */

const url = require('url');

//parse
const minhaURL = 'https://www.micilini.com/path?query=123#fragmento';

const parsedUrl = url.parse(minhaURL, true);
console.log(parsedUrl);

//format
const minhaURLCustomizada = {
  protocol: 'https:',
  host: 'www.micilini.com',
  pathname: '/path',
  query: { query: '123' },
  hash: 'fragmento'
};

const formattedUrl = url.format(minhaURLCustomizada);
console.log(formattedUrl);

//resolve
const baseUrl = 'https://www.micilini.com/path/';
const relativeUrl = '../cursos.html';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);
console.log(resolvedUrl);

//resolveObject
const baseUrl2 = 'https://www.micilini.com/path/';
const relativeUrl2 = '../curso.html';

const resolvedUrlObject2 = url.resolveObject(baseUrl2, relativeUrl2);
console.log(resolvedUrlObject2);
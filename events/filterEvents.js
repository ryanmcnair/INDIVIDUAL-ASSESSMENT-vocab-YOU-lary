import { getLanguageEntries } from '../api/entryData';
import showCards from '../pages/card';

const filterEvents = () => {
  document.querySelector('#javascriptFilter').addEventListener('click', () => getLanguageEntries('javascript').then(showCards));
  document.querySelector('#cSharpFilter').addEventListener('click', () => getLanguageEntries('csharp').then(showCards));
  document.querySelector('#pythonFilter').addEventListener('click', () => getLanguageEntries('python').then(showCards));
  document.querySelector('#phpFilter').addEventListener('click', () => getLanguageEntries('php').then(showCards));
};

export default filterEvents;

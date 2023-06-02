import { getEntries } from '../api/entryData';
import showButtons from '../components/filterButtons';
import showCards from '../pages/card';
import renderForm from '../pages/form';
import clearDom from '../utils/clearDom';
import filterEvents from './filterEvents';

const navigationEvents = () => {
  document.querySelector('#add-form').addEventListener('click', renderForm);
  document.querySelector('#renderCards').addEventListener('click', () => getEntries()
    .then(clearDom())
    .then(showButtons())
    .then(filterEvents())
    .then(showCards));
};

export default navigationEvents;

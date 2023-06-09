import { deleteEntry, getEntries, getSingleEntry } from '../api/entryData';
import showButtons from '../components/filterButtons';
import showCards from '../pages/card';
import renderForm from '../pages/form';
import clearDom from '../utils/clearDom';
import filterEvents from './filterEvents';

const cardEvents = () => {
  document.querySelector('#cards').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then(getEntries()
          .then(clearDom())
          .then(showButtons())
          .then(filterEvents())
          .then(showCards));
      }
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey).then(renderForm);
    }
  });
};

export default cardEvents;

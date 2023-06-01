import { deleteEntry, getEntries } from '../api/entryData';
import showButtons from '../components/filterButtons';
import showCards from '../pages/card';
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
  });
};

export default cardEvents;

import { createEntry, getEntries, updateEntry } from '../api/entryData';
import showButtons from '../components/filterButtons';
import showCards from '../pages/card';
import clearDom from '../utils/clearDom';
import filterEvents from './filterEvents';

const formEvents = (user) => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn('clicked');
    const payload = {
      title: document.querySelector('#titleInput').value,
      definition: document.querySelector('#definitionInput').value,
      language: document.querySelector('#languageSelect').value,
      isPublic: true,
      time: new Date().toLocaleString,
      uid: user.uid,
    };
    createEntry(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateEntry(patchPayload).then(() => {
        getEntries()
          .then(clearDom())
          .then(showButtons())
          .then(filterEvents())
          .then(showCards);
      });
    });
  });
};

export default formEvents;

import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import navigationEvents from '../events/navigationEvents';
import { getEntries } from '../api/entryData';
import showButtonsAndCards from '../pages/card';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navbar();
  logoutButton();
  navigationEvents();
  formEvents(user);
  getEntries().then(showButtonsAndCards);
};

export default startApp;

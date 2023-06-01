import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import navigationEvents from '../events/navigationEvents';
import { getEntries } from '../api/entryData';
// import formEvents from '../events/formEvents';
import filterEvents from '../events/filterEvents';
import showCards from '../pages/card';
import showButtons from '../components/filterButtons';

const startApp = () => {
  getEntries().then(showCards);
  domBuilder();
  navbar();
  logoutButton();
  navigationEvents();
  //   formEvents(user);
  showButtons();
  filterEvents();
};

export default startApp;

import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navbar();
  logoutButton();
  navigationEvents();
};

export default startApp;

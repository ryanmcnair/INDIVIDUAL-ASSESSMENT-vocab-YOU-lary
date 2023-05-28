import renderForm from '../components/form';
import renderCard from '../components/card';

const navigationEvents = () => {
  document.querySelector('#add-form').addEventListener('click', renderForm);
  document.querySelector('#add-cards').addEventListener('click', renderCard);
};

export default navigationEvents;

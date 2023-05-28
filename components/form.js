import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const renderForm = () => {
  clearDom();
  const domstring = '<p>form</p>';
  renderToDOM('#form', domstring);
};

export default renderForm;

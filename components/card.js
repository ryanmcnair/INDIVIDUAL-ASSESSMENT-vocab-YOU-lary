import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const renderCard = () => {
  clearDom();
  const domstring = '<p>cards</p>';
  renderToDOM('#cards', domstring);
};

export default renderCard;

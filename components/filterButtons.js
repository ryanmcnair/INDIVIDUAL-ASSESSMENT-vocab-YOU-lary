import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showButtons = () => {
  clearDom();

  const btnString = `
  <button type="button" class="btn btn-success" id="javascriptFilter">Javascript</button>
  <button type="button" class="btn btn-danger" id='cSharpFilter'>C#</button>
  <button type="button" class="btn btn-warning" id='pythonFilter'>Python</button>
  <button type="button" class="btn btn-success" id='phpFilter'>PHP</button>
  `;

  renderToDOM('#cardButtons', btnString);
};

export default showButtons;

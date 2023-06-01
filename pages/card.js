// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showCards = (array) => {
  // clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="update-entry--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="delete-entry--${item.firebaseKey}">Delete</a>
      </div>
    </div>
  `;
  });

  renderToDOM('#cards', domString);
};

export default showCards;

import { createCard } from '../components/card';

function homePage() {
  let contentWrapper = document.querySelector('.content');
  let contentHeader = document.createElement('div');

  let card1 = createCard({
    title: 'Card 1',
    content: 'This is the first card.',
  });
  let card2 = createCard({
    title: 'Card 2',
    content: 'This is the second card.',
  });
  let card3 = createCard({
    title: 'Card 3',
    content: 'This is the third card.',
  });

  contentWrapper.appendChild(card1);
  contentWrapper.appendChild(card2);
  contentWrapper.appendChild(card3);

  contentWrapper.appendChild(contentHeader);
}

export default homePage;

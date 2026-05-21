import './card.css';

export function createCard({
  title = 'Card Title',
  content = 'Card content goes here.',
  classes = [],
} = {}) {
  const card = document.createElement('div');
  card.classList.add('card', ...classes);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardContent = document.createElement('p');
  cardContent.textContent = content;
  card.appendChild(cardContent);

  return card;
}

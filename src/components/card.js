import './card.css';
import { el } from '../utils/dom';

export function createCard({
  title = 'Card Title',
  content = 'Card content goes here.',
  classes = [],
} = {}) {
  return el(
    'div',
    { classList: ['card', ...classes] },
    el('h2', { textContent: title }),
    el('p', { textContent: content }),
  );
}

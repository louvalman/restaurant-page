import './home.css';
import { el } from '../utils/dom';
import { createCard } from '../components/card';

const cards = [
  { title: 'Card 1', content: 'This is the first card.' },
  { title: 'Card 2', content: 'This is the second card.' },
  { title: 'Card 3', content: 'This is the third card.' },
];

export default function homePage() {
  return el(
    'main',
    { classList: ['home'] },
    ...cards.map((card) => createCard(card)),
  );
}

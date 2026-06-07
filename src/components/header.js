import './header.css';
import { el } from '../utils/dom';
import { createButton } from './button';

export function createHeader({
  title = 'Site',
  classes = [],
  buttons = [],
} = {}) {
  return el(
    'header',
    { classList: ['header', ...classes] },
    el('h1', { textContent: title }),
    el(
      'div',
      { classList: ['btn-container'] },
      ...buttons.map((btnConfig) => createButton(btnConfig)),
    ),
  );
}

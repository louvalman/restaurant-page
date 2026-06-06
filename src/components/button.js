import './button.css';
import { el } from '../utils/dom';

export function createButton({
  label = 'Button',
  onClick = null, // if no click handler, do nothing
  type = 'button', // no form submit
  classes = [],
} = {}) {
  return el('button', {
    type,
    textContent: label,
    classList: ['btn', ...classes],
    ...(typeof onClick === 'function' && { on: { click: onClick } }), // only add event listener if onClick is a function
  });
}

import './header.css';
import { createButton } from './button';

export function createHeader({ title = 'logoname', classes = [] } = {}) {
  const header = document.createElement('header');
  header.classList.add('header', ...classes);

  const headerTitle = document.createElement('h1');
  headerTitle.textContent = title;
  header.appendChild(headerTitle);

  let btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  let btn1 = createButton({
    label: 'button',
    onClick: null,
  });

  let btn2 = createButton({
    label: 'button',
    onClick: null,
  });

  let btn3 = createButton({
    label: 'button',
    onClick: null,
  });

  header.appendChild(btnContainer);
  btnContainer.appendChild(btn1);
  btnContainer.appendChild(btn2);
  btnContainer.appendChild(btn3);

  return header;
}

import './styles.css';
import homePage from './pages/home';
import { createButton } from './components/button';
import { createHeader } from './components/header';
import { createCard } from './components/card';

let body = document.querySelector('body');
let header = createHeader({ title: 'logo' });
let btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
let content = document.createElement('div');
content.classList.add('content');

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

body.appendChild(header);
header.appendChild(btnContainer);
btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
btnContainer.appendChild(btn3);
body.appendChild(content);

homePage();

import './styles.css';
import homePage from './pages/home';
import { createButton } from './components/button';
import { createHeader } from './components/header';
import { createCard } from './components/card';

let body = document.querySelector('body');
let content = document.createElement('div');
content.classList.add('content');

let header = createHeader({ title: 'logo' });

body.appendChild(header);
body.appendChild(content);

homePage();

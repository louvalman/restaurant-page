import './styles.css';
import homePage from './pages/home';
import { createButton } from './components/button';

let nav = document.querySelector('nav');

let homeBtn = createButton({
  label: 'Home',
  onClick: null,
  classes: ['btn'],
});

nav.appendChild(homeBtn);

homePage();

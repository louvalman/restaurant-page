import './styles.css';
import homePage from './pages/home';
import { createHeader } from './components/header';

const body = document.querySelector('body');

const header = createHeader({
  title: 'logo',
  buttons: [
    { label: 'button', onClick: () => alert('Button 1 clicked!') },
    { label: 'button', onClick: () => alert('Button 2 clicked!') },
    { label: 'button', onClick: () => alert('Button 3 clicked!') },
  ],
});

body.append(header, homePage());

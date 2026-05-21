import './header.css';

export function createHeader({ title = 'logoname', classes = [] } = {}) {
  const header = document.createElement('header');
  header.classList.add('header', ...classes);

  const headerTitle = document.createElement('h1');
  headerTitle.textContent = title;
  header.appendChild(headerTitle);

  return header;
}

import '../css/directions.css';

export function directions() {
    fetch('./Directions.html')
      .then(response => response.text())
      .then(html => {
        const navbarContainer = document.querySelector('#directions');
        navbarContainer.innerHTML = html;
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }
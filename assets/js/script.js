
// Scomparsa sidebar destra
const closeButton = document.querySelector('#close-friends');
const asideElement = document.querySelector('#rightBar');

closeButton.addEventListener('click', () => {
  asideElement.style.display = 'none';
});

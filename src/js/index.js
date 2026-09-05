/* Color buttons: clicking one swaps the theme class on <body>.
   The actual colors live in main.css, so no styling happens here. */

const THEMES = ['theme-red', 'theme-green', 'theme-orange'];

const buttons = document.querySelectorAll('.color-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.remove(...THEMES);
    document.body.classList.add(button.dataset.theme);
  });
});

/* Clicking either the name or the photo shows the rest of the card,
   and hides it again. */

const details = document.querySelector('.card-details');
const triggers = [
  document.querySelector('.name'),
  document.querySelector('.photo-frame'),
];

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    details.classList.toggle('is-open');
  });
});

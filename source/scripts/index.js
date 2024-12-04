const buttons = document.querySelectorAll('.variants__button');
const selectedCards = new Set();

function clickButton() {
  buttons.forEach((button) => {
    const card = button.closest('.variants__item');
    const reservedMessage = card.querySelector('.reserved__container');

    button.addEventListener('click', (event) => {
      event.stopPropagation();

      if (selectedCards.has(card)) {
        selectedCards.delete(card);
        reservedMessage.style.display = 'none';
        card.classList.remove('reserved');
      } else {
        selectedCards.add(card);
      }
    });

    card.addEventListener('mouseleave', function () {
      if (selectedCards.has(this)) {
        reservedMessage.style.display = 'block';
        card.classList.add('reserved');
      } else {
        reservedMessage.style.display = 'none';
        card.classList.remove('reserved');
      }
    });

    card.addEventListener('click', function (event) {
      const isReservedLink = event.target.closest('.reserved__link');
      if (selectedCards.has(this) && !isReservedLink) {
        selectedCards.delete(this);
        reservedMessage.style.display = 'none';
        card.classList.remove('reserved');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', clickButton);

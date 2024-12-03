// const buttons = document.querySelectorAll('.variants__button');
// const selectedCards = new Set();

// function clickButton() {
//   buttons.forEach((button) => {
//     const card = button.closest('.variants__item');

//     button.addEventListener('click', (event) => {
//       event.stopPropagation();

//       const template = document.querySelector('template.reserved');

//       if (selectedCards.has(card)) {
//         selectedCards.delete(card);
//         card.classList.remove('reserved');
//         const reservedMessage = card.querySelector('.reserved__container');
//         if (reservedMessage) {
//           reservedMessage.remove();
//         }
//       } else {
//         selectedCards.add(card);
//         const clone = document.importNode(template.content, true);
//         card.appendChild(clone);
//         card.classList.add('reserved');
//       }
//     });

//     card.addEventListener('mouseleave', function () {
//       if (selectedCards.has(this)) {
//         this.classList.add('reserved');
//       } else {
//         this.classList.remove('reserved');
//       }
//     });

//     card.addEventListener('click', function () {
//       if (this.classList.contains('reserved')) {
//         selectedCards.delete(this);
//         this.classList.remove('reserved');
//         const reservedMessage = this.querySelector('.reserved__container');
//         if (reservedMessage) {
//           reservedMessage.remove();
//         }
//       }
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', clickButton);

const buttons = document.querySelectorAll('.variants__button');
const selectedCards = new Set();

function clickButton() {
  buttons.forEach((button) => {
    const card = button.closest('.variants__item');

    button.addEventListener('click', (event) => {
      event.stopPropagation();

      // Проверяем, выбрана ли карточка
      if (selectedCards.has(card)) {
        selectedCards.delete(card);
        card.classList.remove('reserved');
        const reservedMessage = card.querySelector('.reserved__container');
        if (reservedMessage) {
          reservedMessage.remove();
        }
      } else {
        selectedCards.add(card);
        // Не добавляем состояние reserved и шаблон здесь
      }
    });

    // Обрабатываем событие mouseleave для установки состояния reserved и добавления шаблона
    card.addEventListener('mouseleave', function () {
      if (selectedCards.has(this)) {
        this.classList.add('reserved'); // Устанавливаем состояние reserved при уходе курсора

        // Добавляем шаблон только после установки класса reserved
        const template = document.querySelector('template.reserved');
        const clone = document.importNode(template.content, true);
        this.appendChild(clone);
      } else {
        this.classList.remove('reserved'); // Убираем состояние, если карточка не выбрана
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', clickButton);

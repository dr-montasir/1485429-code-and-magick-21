'use strict';

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document
    .querySelector(`.setup-similar-list`);
const similarWizardTemplate = document
    .querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const WIZARD_SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const EYES_COLOR = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const NUMBER_OF_WIZARDS = 4;

for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = WIZARD_NAMES[i] + ` ` + WIZARD_SURNAMES[i];
  wizardElement.querySelector(`.wizard-coat`).style.fill = COAT_COLOR[i];
  wizardElement.querySelector(`.wizard-eyes`).style.fill = EYES_COLOR[i];

  similarListElement.appendChild(wizardElement);
}

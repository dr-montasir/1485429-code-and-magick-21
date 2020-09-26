'use strict';

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

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document
    .querySelector(`.setup-similar-list`);
const similarWizardTemplate = document
    .querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

// The value is no lower and is less than (but not equal to) max.
const getRandomInt = (min = 0, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createWizard = () => ({
  name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
  surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
  coatColor: COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
  eyesColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]
});

const getWizards = () => {
  const wizards = [];

  for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
    wizards.push(createWizard());
  }

  return wizards;
};

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = `${wizard.name} ${wizard.surname}`;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderWizards = (wizards) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
};

similarListElement.appendChild(renderWizards(getWizards()));

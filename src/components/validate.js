import { errorMessages, settings } from "./data.js";

function isValid(input) {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
        input.setCustomValidity(errorMessages.empty);

        return false;
    }

    if (input.validity.tooShort || input.validity.tooLong) {
        input.setCustomValidity(errorMessages.wrongLength);

        return false;
    }

    if (input.validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity(errorMessages.wrongUrl);

        return false;
    }

    input.reportValidity();
}

function isInputValid(input) {
    const currentSpan = input.closest('.popup__form').querySelector(`#${input.id}-error`);

    if (!isValid(input)) {
        currentSpan.textContent = input.validationMessage;
    }
}
export function setButtonDesable(button, state, settings) {

    if (state) {
        button.setAttribute('disabled', true);
        button.classList.add(settings.btnStateDisabled);
    } else {
        button.removeAttribute('disabled');
        button.classList.remove(settings.btnStateDisabled);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        setButtonDesable(buttonElement, true, settings);
    } else {
        setButtonDesable(buttonElement, false, settings);
    }
}

function setEventListeners(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.input));
    const buttonElement = formElement.querySelector(settings.saveBtn);

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isInputValid(inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

 export function enableValidation(settings) {
  Array.from(document.forms).forEach(form => setEventListeners(form, settings));
}

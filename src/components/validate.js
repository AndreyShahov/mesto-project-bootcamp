import { errorMessages } from "./data.js";

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
    const currentSpan = input.parentNode.querySelector(`#${input.id}-error`);

    if (!isValid(input)) {
        currentSpan.textContent = input.validationMessage;
    }
}
export function setButtonDesable(button, state) {

    if (state) {
        button.setAttribute('disabled', true);
        button.classList.add('popup__save-btn_disabled');
    } else {
        button.removeAttribute('disabled');
        button.classList.remove('popup__save-btn_disabled');
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        setButtonDesable(buttonElement, true);
    } else {
        setButtonDesable(buttonElement, false);
    }
}

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-btn');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isInputValid(inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

Array.from(document.forms).forEach(form => setEventListeners(form));

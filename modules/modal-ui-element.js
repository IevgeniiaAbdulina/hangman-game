let modal = undefined;

const createModalElement = (result, secretWord, onCloseModalListener) => {
  const overlayElement = document.createElement('div');
  overlayElement.className = 'overlay';
  overlayElement.addEventListener('click', (event) => {
    if (event.target === overlayElement) {
      onCloseModalListener();
    }
  });

  const modalElement = document.createElement("div");
  modalElement.setAttribute("id", "modal");
  modalElement.className = "modal container";

  const button = document.createElement('button');
  button.className = 'modal__start-button button ';
  button.innerText = 'play again';
  button.addEventListener('click', () => {
    onCloseModalListener();
  })

  const closeButton = document.createElement('button');
  closeButton.className = 'modal__close-button';
  closeButton.addEventListener('click', () => {
    onCloseModalListener();
  })

  const modalHeader = document.createElement('h2');
  modalHeader.className = 'modal__header';
  modalHeader.innerText = `${result}`

  const modalSubheader = document.createElement('h3');
  modalSubheader.className = 'modal__subheader';
  modalSubheader.innerText = `Secret word is: ${secretWord}`

  modalElement.append(
      closeButton,
      modalHeader,
      modalSubheader,
      button
  )

  overlayElement.append(modalElement);

  return overlayElement;
}

function showModal(result, secretWord, onCloseModalListener) {
  modal = createModalElement(result, secretWord, onCloseModalListener);
  setTimeout(() => {
    document.body.prepend(modal);
    document.body.classList.add('hidden');
  }, 300)
}

export function hideModal() {
  if (modal) {
    document.body.removeChild(modal);
    modal = undefined;
  }
  document.body.classList.remove('hidden');
}

export function isModalShown() {
  return modal !== undefined;
}

export {showModal}

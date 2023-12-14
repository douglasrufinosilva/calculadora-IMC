import { clearInput } from "./utils.js"

window.addEventListener('keydown', handleKeydown)

const Modal = {

  closeBtn: document.querySelector('.close'),
  result: document.querySelector('.result-imc'),
  wrapper: document.querySelector('.modal-wrapper'),

  open: function () {
    Modal.wrapper.classList.add('open')
  },
  close() { // Shorthand
    Modal.wrapper.classList.remove('open')
  }
}

Modal.closeBtn.onclick = () => {
  Modal.close()
  clearInput()
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
    clearInput()
  }
}

export { Modal }
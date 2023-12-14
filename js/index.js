import { Modal } from "./modal.js"
import { clearInput, calculateBMI, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const bmiTable = document.querySelector('.bmi-table')
const alertError = document.querySelector('.alert-box')

inputWeight.oninput = () => alertError.classList.remove('show-error')
inputHeight.oninput = () => alertError.classList.remove('show-error')

form.onsubmit = (ev) => {
  ev.preventDefault()
  
  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANumber) {
    alertError.classList.add('show-error')
    clearInput()
    return
  }

  const resultImc = calculateBMI(weight, height)

  Modal.open()

  Modal.result.innerText = `O seu IMC é: ${resultImc}`
  bmiTable.innerText = 'Menor que 18,5 - Baixo peso' +
  '\nDe 18,5 a 24,9	- Peso normal' +
  '\nDe 25 a 29,9	- Sobrepeso' +
  '\nDe 30 a 34,9	- Obesidade grau I' +
  '\nDe 35 a 39.9	Obesidade grau II' +
  '\nIgual ou maior que 40	Obesidade grau III'

}

export { inputHeight, inputWeight }
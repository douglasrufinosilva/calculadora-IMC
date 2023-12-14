import { inputHeight, inputWeight } from "./index.js"

function clearInput() {
  inputWeight.value  = ''
  inputHeight.value = ''
}

function calculateBMI(weight, height) {
  const result = Number((weight / (height * height)).toFixed(1))
  return result
}

function notNumber(value) {
  return isNaN(value) || value == ''
}

export { clearInput, calculateBMI, notNumber }

function drawNumber (number) {
  if (number === 2) {
    return 1
  }

  if (number === 1) {
    return 0
  }

  if (number % 2 === 0) {
    return 2
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return 0
    }
  }
  return 1
}

const body = document.querySelector('body')
const container = document.createElement('div')
container.setAttribute('class', 'container')
container.style.width = '50%'
container.style.margin = 'auto'
container.style.textAlign = 'center'
body.appendChild(container)

const headingTitle = document.createElement('h1')

headingTitle.innerHTML = 'Number Generator'
headingTitle.style.color = '#35a529'
headingTitle.style.margin = '0'
container.appendChild(headingTitle)

const subTitle = document.createElement('div')
subTitle.innerHTML = '30DaysOfJavaScript:DOM Day 3'

container.append(subTitle)

const author = document.createElement('div')
author.innerHTML = 'Author: Asabeneh Yetayeh'

container.appendChild(author)

const inputContainer = document.createElement('div')
inputContainer.style.margin = '20px 0px'

container.appendChild(inputContainer)

const inputGrouping = document.createElement('div')
inputGrouping.style.display = 'flex'

const textBox = document.createElement('input')
textBox.setAttribute('type', 'text')
textBox.style.marginRight = '10px'
textBox.style.width = '70%'
textBox.setAttribute('placeholder', 'Generate more numbers...')
textBox.style.height = '30px'
textBox.style.border = '#32c172 1px solid'
textBox.style.padding = '5px 10px'
inputGrouping.appendChild(textBox)

const button = document.createElement('input')
button.setAttribute('type', 'button')
button.value = 'Generate numbers'
button.style.color = '#ffffff'
button.style.backgroundColor = '#32c172'
button.style.border = 'none'
inputGrouping.appendChild(button)
inputContainer.appendChild(inputGrouping)

const alertMessage = document.createElement('div')
alertMessage.style.textAlign = 'left'
alertMessage.style.marginBottom = '10px'
inputGrouping.insertAdjacentElement('beforebegin', alertMessage)

const numberContainner = document.createElement('div')
// numberContainner.style.margin = '0 10%'
numberContainner.style.display = 'flex'
numberContainner.style.flexWrap = 'wrap'
numberContainner.style.alignContent = 'center'
container.appendChild(numberContainner)

button.addEventListener('click', () => {
  if (textBox.value === '') {
    alertMessage.innerHTML = 'Enter number value on the input field to generate numbers'
    alertMessage.style.color = 'red'
  } else if (isNaN(textBox.value)) {
    alertMessage.innerHTML = 'Input value must be a number'
    alertMessage.style.color = 'red'
  } else {
    alertMessage.innerHTML = ''
    numberContainner.innerHTML = ''

    for (let i = 0; i < textBox.value; i++) {
      const numberbox = document.createElement('div')
      numberbox.style.width = '15%'
      numberbox.style.margin = '2px'
      numberbox.style.padding = '20px 0px'
      numberbox.style.fontSize = '30px'
      numberbox.innerHTML = i
      if (drawNumber(i) === 0) {
        numberbox.style.backgroundColor = '#e4a026'
      } else if (drawNumber(i) === 1) {
        numberbox.style.backgroundColor = '#b62226'
      } else {
        numberbox.style.backgroundColor = '#00ffa3'
      }

      numberContainner.appendChild(numberbox)
    }
  }
})

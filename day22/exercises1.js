
const container = document.querySelector('.container')
container.style.textAlign = 'center'

const title = document.createElement('h1')
title.innerHTML = 'Number Generator'
container.appendChild(title)

const subTitle = document.createElement('h2')
subTitle.innerHTML = '30DaysOfJavaScriptDOM Day 2'
subTitle.style.textDecoration = 'underline'
subTitle.style.fontWeight = '100'
container.appendChild(subTitle)

const author = document.createElement('h3')
author.innerHTML = 'Author Asabeneh Yatayeh'
author.style.textDecoration = 'underline'
author.style.fontWeight = '100'
container.appendChild(author)

const numberContainner = document.createElement('div')
numberContainner.style.margin = '0 10%'
numberContainner.style.display = 'flex'
numberContainner.style.flexWrap = 'wrap'
numberContainner.style.alignContent = 'center'
container.appendChild(numberContainner)

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

for (let i = 0; i < 102; i++) {
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

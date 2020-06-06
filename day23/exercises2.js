const body = document.querySelector('body')

const container = document.createElement('div')
container.style.margin = 'auto'
container.style.width = '50%'
container.style.textAlign = '-webkit-center'

body.appendChild(container)

const keyPressedBox = document.createElement('div')
keyPressedBox.innerHTML = 'Press any keyboard key'
keyPressedBox.style.marginTop = '200px'
keyPressedBox.style.fontSize = '44px'
keyPressedBox.style.textAlign = 'center'
keyPressedBox.style.fontWeight = '700'
keyPressedBox.style.boxShadow = '2px 3px 3px 2px #8f8f8f'
keyPressedBox.style.textShadow = '2px 1px #a5a5a5'
keyPressedBox.style.width = 'fit-content'
keyPressedBox.style.padding = '20px 64px'
container.appendChild(keyPressedBox)

const keyCodeBox = document.createElement('div')
keyCodeBox.style.marginTop = '20px'
keyCodeBox.style.fontSize = '68px'
keyCodeBox.style.width = 'min-content'
keyCodeBox.style.padding = '50px 20px'
keyCodeBox.style.fontWeight = 'bold'
keyCodeBox.style.color = '#349877'
keyCodeBox.style.textShadow = '2px 1px #000000'
keyCodeBox.style.borderRadius = '3px'
container.appendChild(keyCodeBox)

document.addEventListener('keypress', e => {
  const keyChar = document.createElement('span')
  keyChar.style.color = '#349877'
  keyChar.innerHTML = e.key
  keyPressedBox.innerHTML = 'You pressed ' + '<span style="color: #349877">' + e.key + '</span>'
  keyCodeBox.style.boxShadow = '1px 1px 1px 1px #a4a4a4'
  keyCodeBox.innerHTML = e.keyCode
})

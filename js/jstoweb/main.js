const buttons = document.querySelectorAll('.tecla')

function playSound(id) {
  const element = document.querySelector(id)
  if (!element && !(element.localName === 'audio')) {
    return
  }
  element.play()
}

for (let cont = 0; cont < buttons.length; cont++) {
  const tecla = buttons[cont]
  const instrumento = tecla.classList[1]
  const id = `#som_${instrumento}`

  tecla.onclick = () => playSound(id)

  tecla.onkeydown = event => {
    if (event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = () => {
    tecla.classList.remove('ativa')
  }
}

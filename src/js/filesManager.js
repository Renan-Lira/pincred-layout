

const fileSelector = (idInput) => {

    const input = document.querySelector(`#${idInput}`)
    input.removeAttribute('capture')
    input.click()


}

const camOpen = (idInput) => {
    const input = document.querySelector(`#${idInput}`)
    input.setAttribute('capture', 'user')
    input.capture = true

    input.click()
}

const inputcontroller = (ev) => {
    let buttonRemove = ev.parentElement.children[1]

    if (ev.value) {
        buttonRemove.style.display = 'flex'
        ev.classList.add('!text-black')
        buttonsRemoveFile(buttonRemove, ev)
    } else {
        buttonRemove.style.display = 'none'

    }


}

const buttonsRemoveFile = (buttonRemove, input) => {
    buttonRemove.addEventListener('click', () => {
        input.value = ''
        input.classList.remove('!text-black')
        buttonRemove.style.display = 'none'
    })
}
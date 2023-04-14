

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
        buttonsRemoveFile(ev)
    } else {
        buttonRemove.style.display = 'none'
    }


}

const buttonsRemoveFile = (input) => {
    let buttons = document.querySelectorAll('.remove-file')
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            input.value = ''
            button.style.display = 'none'
        })
    })
}


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
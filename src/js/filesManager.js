

const fileSelector = (idInput) => {

    const input = document.querySelector(`#${idInput}`)
    input.capture = false
    input.click()


}

const camOpen = (idInput) => {
    const input = document.querySelector(`#${idInput}`)

    input.capture = true

    input.click()
}
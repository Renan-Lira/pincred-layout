

const fileSelector = (idInput) => {

    const input = document.querySelector(`#${idInput}`)
    input.accept = 'image/*;'
    input.click()


}

const camOpen = (idInput) => {
    const input = document.querySelector(`#${idInput}`)

    input.accept = 'image/*;capture=camera'

    input.click()
}

const main = (params) => {
    // função dinamica para qualquer tipo de modal existente no projeto
    // botões e modais serão identificado pelo dataset "modal-..."
    const buttonsModal = document.querySelectorAll('button[data-modal-target]')

    buttonsModal.forEach((button, k) => {

        // adicionando funcionamento para cada botão
        button.addEventListener('click', () => {
            let modal = document.querySelector(`#${button.dataset.modalTarget}`)
            let scrollTarget = modal.children.item(0)

            modal.style.width = '100%'
            scrollTarget.scrollIntoView({block: "center", inline: "center", behavior:"smooth"})

            // ativação dos botões para fechar o modal
            let buttonsClose = scrollTarget.contentDocument.body.querySelectorAll('[data-modal-close]')
            buttonsClose.forEach((close, index) => {
                close.addEventListener('click', () => modal.style.width = "0")
            })
        },{passive: true})

    })
}


main()
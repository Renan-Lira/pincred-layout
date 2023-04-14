function proxEtapa() {
   let inputValue = document.querySelector('input[name="tipoemprestimo"]:checked').value

   if (inputValue) {
        const cards = document.querySelectorAll('.card-form-simulation')

        cards.forEach((v, k) => {
            if (k == cards.length-1) return ''
            v.classList.remove('card-form-simulation-disabled')
            v.classList.add('card-form-simulation-active')
        })
   }
}

function calcular() {

    // identificador: classe css a ser modificada
    const cards = {
        '.card-links-form-simulacao': 'card-links-form-simulacao',
        '#resumo-resultado': 'card-form-simulation'
    }

    for (const id in cards) {

        let card = document.querySelector(id)

        if (card.classList.contains(`${cards[id]}-disabled`)) {

            card.classList.remove(`${cards[id]}-disabled`)
            card.classList.add(`${cards[id]}-active`)
        }
    }

    

}
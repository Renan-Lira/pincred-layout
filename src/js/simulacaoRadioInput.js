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

    const objs = {
        '.card-links-form-simulacao': 'card-links-form-simulacao',
        '#resumo-resultado': 'card-form-simulation'
    }

    for (const key in objs) {

        let card = document.querySelector(key)

        if (card.classList.contains(`${objs[key]}-disabled`)) {

            card.classList.remove(`${objs[key]}-disabled`)
            card.classList.add(`${objs[key]}-active`)
        }
    }

    

}
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
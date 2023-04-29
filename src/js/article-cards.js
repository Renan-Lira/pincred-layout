
document.querySelectorAll('.check-article-card').forEach((element, index) => {
    document.querySelectorAll('.img-open-close-article-card')[index].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#014EA3" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>'
    element.addEventListener('click', (ev) => {

        if (element.checked) {

            document.querySelectorAll('.img-open-close-article-card')[index].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#014EA3" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path></svg>'

        } else {

            document.querySelectorAll('.img-open-close-article-card')[index].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#014EA3" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>'
        }
    })
})



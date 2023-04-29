


document.querySelector('#button-menu').addEventListener('click', () => {
    const menulist = document.getElementById('menu-list')

    if (menulist.classList.contains('menu-visible')) return menulist.classList.remove(['menu-visible'])
    
    return menulist.classList.add(['menu-visible'])
})



let typeClickSubMenu = ''

if ('ontouchstart' in window) {
    typeClickSubMenu = 'click'    
} else {
    typeClickSubMenu = 'mouseover'
}

document.querySelector('#button-sub-menu-produtos').addEventListener('click', () => {

    const menulist = document.getElementById('menu-list-produtos')

    if (menulist.classList.contains('menu-visible')) return menulist.classList.remove(['menu-visible'])
    
    return menulist.classList.add(['menu-visible'])
})
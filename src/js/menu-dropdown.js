const menulist = document.getElementById('menu-list')

function clickButtonMenu() {
    
    if (menulist.classList.contains('menu-visible')) return menulist.classList.remove(['menu-visible'])
    
    return menulist.classList.add(['menu-visible'])
}
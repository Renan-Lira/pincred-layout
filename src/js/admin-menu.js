function clickEventMenu () {
    const menulist = document.getElementById('admin-menu-target')

    if (menulist.classList.contains('admin-menu-visible')) return menulist.classList.remove(['admin-menu-visible'])
    
    return menulist.classList.add(['admin-menu-visible'])
}

document.querySelector('#admin-button-menu').addEventListener('click', clickEventMenu)
document.querySelector('#admin-close-menu').addEventListener('click', clickEventMenu)

const menulist = document.getElementById('menu-list')

function clickButtonMenu() {
    if (menulist.classList.contains('menu-visible')) {
        console.log(menulist.classList)
        return menulist.classList.remove(['menu-visible'])
    }
    console.log(menulist.classList)
    return menulist.classList.add(['menu-visible'])
}
let button = document.getElementById('menu-button')

button.addEventListener('click', function(event){
    event.preventDefault()
    let menu = document.getElementById('pokemon-menu')
    menu.classList.toggle('is-open')
})

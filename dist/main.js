const links = document.querySelectorAll('a.nav__link')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(e => {
            e.classList.remove('current')
        })
        if (!(e.target.classList.contains("current"))) {
            e.target.classList.add("current")
        }
    })
})
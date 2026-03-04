const hamburger = document.querySelector('#hamburger')
const navList = document.querySelector('ul')
const hamburgerItems = document.querySelectorAll('nav a')

hamburger.addEventListener("click", () => {
    navList.classList.toggle('open')
    const isExpanded = hamburger.getAttribute('aria-expanded')
    hamburger.setAttribute('aria-expanded', isExpanded === 'true' ? 'false' : 'true');

})

hamburgerItems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    })
})
const hamburger = document.querySelector('#hamburger')
const navList = document.querySelector('ul')
const hamburgerItems = document.querySelectorAll('nav a')
const target = document.querySelectorAll('.fade-up')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}
const observer = new IntersectionObserver(handleIntersection, options);
window.addEventListener('scroll', onScroll)


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

function onScroll() {
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom > 0) {
            const activeLink = document.querySelector(`nav a[href="#${section.id}"]`)
            hamburgerItems.forEach((link) => link.classList.remove('active'))
            if (activeLink) {
                activeLink.classList.add('active')
            }
        }
    })
}


function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }
    });
}



target.forEach((el) => {
    observer.observe(el)
})




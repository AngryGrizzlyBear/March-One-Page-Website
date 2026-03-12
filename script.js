const hamburger = document.querySelector('#hamburger')
const navList = document.querySelector('ul')
const hamburgerItems = document.querySelectorAll('nav a')
const target = document.querySelectorAll('.fade-up')

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





function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }
    });
}


const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}


const observer = new IntersectionObserver(handleIntersection, options); 
    


target.forEach((el) => {
        observer.observe(el)
    })



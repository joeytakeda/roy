/* Library */

let lazyImgs = document.querySelectorAll('img.lazy');
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let item = entry.target;
            entry.target.src = entry.target.getAttribute('data-src');
            observer.unobserve(item);
        }
    })
}, {
    rootMargin: "200px"
})

lazy();

function lazy(){
    lazyImgs.forEach(img => {
        let orig = img.getAttribute('src');
        img.setAttribute('data-src', orig);
        img.setAttribute('src', placeholder)
        observer.observe(img);
    })

}

function slideReveal(query, directionCard, directionImg) {
    container = document.querySelector(query)
    container.slide = gsap.timeline({
        scrollTrigger: {
            trigger: query,
            start: 'bottom 100%',
        }
    }).from(query + ' .card', {
        x: directionCard + '200%',
        duration: 2,
        ease: Power2.easeOut
    }).from(query + ' .illustration img', {
        x: directionImg + '100%',
        duration: 2,
        ease: Power2
    }, "-=2")
}

function revealCard(query) {
    container = document.querySelector(query)
    container.tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.more',
            start: 'bottom 100%',
        }
    }).from(query, {
        height: 0,
        opacity: 0,
        duration: 4,
        ease: Power2.easeOut
    })
}

document.querySelector('ul.detail').tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'ul.detail',
        start: 'bottom 80%'
    }
}).from('ul.detail li', {
    y: '+=100px',
    opacity: 0,
    duration: 2,
    delay: function (i) {
        return i == 1 ? 0 : 1
    },
    ease: Back.easeOut
})

document.querySelector('.pratique').tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.pratique',
        start: 'bottom 100%',
    }
}).from('.pratique', {
    opacity: 0,
    transform: "scale(0)",
    duration: 1
}).from('.pratique .second', {
    opacity: 0,
    transform: "scale(0)",
    duration: 1
}).from('.pratique .second div, .pratique img', {
    opacity: 0,
    transform: "scale(0)",
    stagger: .3,
    duration: 1
})



slideReveal('.yoga', '+', '-')
slideReveal('.sophro', '-', '+')

//revealCard('.more .card')
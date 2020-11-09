(() => {
    window.addEventListener('DOMContentLoaded', () => {
        gsap.from('.cover', {
            transform: 'translateX(-200%)',
            opacity: 0,
            ease: Power2.easeOut,
            duration: 2,
        })
        gsap.from('main', {
            transform: 'translateY(200%)',
            ease: Power2.easeOut,
            duration: 3,
            delay: .5
        })
    });
})();
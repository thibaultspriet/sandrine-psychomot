window.addEventListener('DOMContentLoaded',()=>{
    gsap.from('.cover',{
        opacity : 0,
        duration : 5
    })
})


gsap.utils.toArray('.card .title').forEach((el,ind)=>{
    el.writeTitle = gsap.timeline({
        scrollTrigger : {
            trigger : '.grid',
            start : 'center 100%',
        }
    }).to(el,{
        duration : 3,
        text: function (){
            return el.dataset.title
        },
        ease : Power2.easeOut
    })
})
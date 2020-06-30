// Elements to animate
var cover = "main img"
var def = "main .definition"

var links = gsap.utils.toArray('.list-items li')

var icons = gsap.utils.toArray('.aide img')


var cover_tl = gsap.timeline({paused : true});
cover_tl.from(cover,{
    transform : "scale(0)",
    duration : 2,
    ease : "power2.out"
})
cover_tl.from(def,{
    transform : "translateY("+ -50 + "%)",
    opacity : 0,
    duration : 1,
    ease : "slow.inOut"
},"-=1")

function linkAppear(link){
    link.tl = gsap.timeline({
        scrollTrigger : {
            trigger : link,
            start: "bottom 90%",
        }
    }).from(link,{
        x : "-200%",
        ease : "power4.out",
        duration :1,
    },'-=1')
}

function iconsTl(icon,index){
    icon.tl = gsap.timeline({
        scrollTrigger : {
            trigger : '.aides',
            start : 'bottom 100%',
        }
    }).from(icon,{
        y : "50px",
        opacity : 0,
        ease : Power4.easeOut,
        duration : 1
    },index/2)
}

function iconsHover(icon){
    icon.tl_hover = gsap.timeline({paused : true})
    .to(icon,{
        y : "-10px",
        opacity : .7,
        duration : 1.5
    })
}

function linksGo(link){
    link.go = gsap.timeline({
        paused : true,
        onComplete : function () {
            link.parentElement.click()
            }
    }).to(link,{
        x : "200%",
        duration : .3,
        ease : Power4.in
    })
}

links.forEach((link,index)=>{
    linkAppear(link)
    linksGo(link)
});


icons.forEach((icon,index)=>{
    iconsTl(icon,index)
    iconsHover(icon)
});




window.addEventListener('DOMContentLoaded',()=>{
    cover_tl.play()
})

document.querySelectorAll('.aide img').forEach((el)=>{
    el.addEventListener('mouseover',()=>{
        el.tl_hover.repeat(-1).yoyo(true).play()
    })
    el.addEventListener('mouseout',()=>{
        el.tl_hover.pause()
    })
})

document.querySelectorAll('.list-items li').forEach((el)=>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()
        el.go.play()
    })
})




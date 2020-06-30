/* gsap.registerPlugin(ScrollTrigger) */

const icons = gsap.utils.toArray('.role .icon')


function tlIcon(icon){
    icon.tl = gsap.timeline({
        paused : true,
        scrollTrigger : {
            trigger : icon,
            start: "bottom 100%",
            toggleActions : "restart resume resume reset",
        }
    }).to(icon,1,{
        opacity : 1,
        ease : Power2.easeOut
    }).from(icon,3,{
        y : "30px",
        ease : Elastic.easeOut
    },'-=1')

}

icons.forEach((icon,index)=>{
    tlIcon(icon)
});
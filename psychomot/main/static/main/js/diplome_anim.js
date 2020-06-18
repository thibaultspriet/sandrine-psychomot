var psy_anims = gsap.utils.toArray('.psychomotricite  .anim')
var yoga_anims = gsap.utils.toArray('.sophrologie  .anim')



function timeline(section){
    section.forEach((anim,index)=>{
        anim.tl = gsap.timeline({
            paused : true,
            scrollTrigger : {
                trigger : anim.parentElement,
                start : "bottom 100%",
                toggleActions : "restart resume resume reverse"
            }
        })
        .to(anim,1.5,{
            width : (90 - index*10)+'%',
            ease : Power2.easeOut,
        })
    });
}

timeline(psy_anims)
timeline(yoga_anims)


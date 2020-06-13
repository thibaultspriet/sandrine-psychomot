$(function(){
    const btns = $('.container-cross')
    const descriptions = $('.description')
    const lines2 = $('.line2')
    const containers = $('.container-item-description')


    btns.click(function (e){
        let container = e.target.parentElement
        containers.each((index,el)=>{
            if (el !== container){
                el.descriptionTl.reverse()

            }
            else{
                if(el.descriptionTl.reversed()){
                    el.descriptionTl.play()
                }
                else{
                    el.descriptionTl.reverse()
                }
            }
        })
    })
})

// GSAP
function tl(container,description,line2){
    container.descriptionTl = gsap.timeline({paused:true})
    .to(line2,.3,{opacity : 0})
    .set(description,{height : "auto"})
    .from(description,.5,{
        height : 0,
        ease : Power1.easeInOut
    })
    
    container.descriptionTl.reverse()
}

gsap.utils.toArray('.container-item-description').forEach((container,index)=>{
    var description = container.querySelector('.description')
    var line2 = container.querySelector('.line2')
    tl(container,description, line2)
});


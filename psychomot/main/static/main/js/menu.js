$(function(){
    const hamburger = $('.hamburger')
    const menu = $('.list-rubriques')
    const links = $('.list-rubriques li')
    const menuContainer = $('.rubriques')


    // Timeline GSAP
    var menuTL = gsap.timeline({paused:true})
        .to(hamburger,1,{
            left:"unset",right:0,
            ease : Power2.easeOut
        })
        .to(menuContainer,1,{
            height:"auto",
            ease : Power2.easeOut
        },"-=1")
        .to(menu,1,{
            transform : "translateX(0)",
            ease : Power2.easeOut
        },"-=1")
        .from(links,1,{
            transform : "translateX(-100%)",
            opacity : 0,
            ease : Power2.easeOut,
            delay : (index,element,all)=>{
                return index*0.2 
            }
        },'-=1')
        .reverse()
    
    
    
    hamburger.click(function (){
        if(menuTL.reversed()){
            menuTL.play()
        }
        else{
            menuTL.reverse()
        }
        
    })
})
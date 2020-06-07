$(function(){
    const hamburger = $('.hamburger')
    const menu = $('.list-rubriques')
    const links = $('.list-rubriques li')
    
    
    hamburger.click(function (){
        menu.toggleClass('active')
        $.each(links, function (index,link){
            let delay = index*100
            let animation =  'revealLink .5s ease ' + delay + 'ms both'
            console.log(animation)
            link.style.animation = animation
        })
    })
})
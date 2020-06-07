$(function(){
    const btns = $('.container-cross')
    const descriptions = $('.description')
    const lines2 = $('.line2')


    btns.click(function (e){
        let description = e.target.nextElementSibling
        descriptions.each((index,el)=>{
            if (el !== description){
                el.classList.remove("active")
            }
        })
        lines2.css('display', 'block')
        description.classList.toggle('active')
        if(description.classList.contains("active")){
            e.target.children[1].style.display="none"
        }
        
    })
})
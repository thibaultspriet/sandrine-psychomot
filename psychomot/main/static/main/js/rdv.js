$(function(){
    // Components
    select = $('#id_service')
    nom = $('#name')
    price = $('.infos #price')
    duration = $('.infos #duration')
    description = $('#description')


    function updateInfo(service){
        $.get('/rendez_vous/',{'service_name':service},(data)=>{
            price.text(data.price)
            nom.text(data.name)
            duration.text(data.duration)
            description.text(data.description)
        })
    }

    select.change((e)=>{
        updateInfo(e.target.value)
    })

    
    
    
})
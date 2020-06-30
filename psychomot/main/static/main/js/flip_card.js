CSSPlugin.defaultTransformPerspective = 1000;

//we set the backface 
TweenMax.set($(".back"), {rotationY:-180});

$.each($(".card"), function(i,element) {
  
    var frontCard = $(this).children(".front"),
      backCard = $(this).children(".back"),
      tl = new TimelineMax({paused:true});
    
    tl
        .to(frontCard, 1, {rotationY:180, ease : Power2.easeOut})
        .to(backCard, 1, {rotationY:0, ease: Power2.easeOut},0)
        .to(element, .5, {z:50},0)
        .to(element, .5, {z:0},.5);
    
    element.animation = tl;
  
});

$(".card").hover(elOver, elOut);

function elOver() {
    this.animation.play();
}

function elOut() {
    this.animation.reverse();
}
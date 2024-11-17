
var blur=document.querySelector("#blur-cursor");
var cursor=document.querySelector('#cursor');
document.addEventListener('mousemove',function(data){
    setTimeout( function(){
    cursor.style.left=`${data.x-15}px`;
    cursor.style.top=`${data.y-15}px`
    },0);
    setTimeout(function(){
    blur.style.left=`${data.x-150}px`;
    blur.style.top=`${data.y-150}px`;
    },150);
}
)
gsap.to('#nav',{
    backgroundColor:'rgb(0,0,0)',
    height:"120px",     
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top-10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to('#main',{
    backgroundColor:'rgba(0, 0, 0, 1.5)',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:2,
        start:"top-10vh",
    }
})
var card=document.querySelectorAll('.card-in')
for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseenter',function(e){
        cursor.style.zIndex=9;
    })
}
let allh4=document.querySelectorAll('#nav h4')
allh4.forEach(function(element){
    element.addEventListener('mouseenter',function(e){
        cursor.style.transition='transform 0.5s ease'
        cursor.style.zIndex=100;
        cursor.style.transform='scale(2)';
        cursor.style.border='2px solid #95c11e';
        cursor.style.backgroundColor='transparent';
        console.log(element)

    })
    element.addEventListener('mouseleave',function(e){
        cursor.style.zIndex=99;
        cursor.style.transform='scale(1)';
        cursor.style.border='0px solid #95c11e';
        cursor.style.backgroundColor='#95c11e';
        console.log(element)

    })
})
gsap.from('#about-us img',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 50%",
        
    }

})
gsap.from('#cards',{
    y:50,
    opacity:0,
    duration:3,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        start:"top 80%",
        
    }

})
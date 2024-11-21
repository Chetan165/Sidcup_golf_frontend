let arrow_x=0;
let arrow_y=0;
var blur=document.querySelector("#blur-cursor");
var cursor=document.querySelector('#cursor');
document.addEventListener('mousemove',function(data){
    setTimeout( function(){
    cursor.style.left=`${data.x-15}px`;
    cursor.style.top=`${data.y-15}px`;
    arrow_x=data.x;
    arrow_y=data.y;
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

    })
    element.addEventListener('mouseleave',function(e){
        cursor.style.zIndex=99;
        cursor.style.transform='scale(1)';
        cursor.style.border='0px solid #95c11e';
        cursor.style.backgroundColor='#95c11e';
        

    })
})
gsap.from('#nav h4',{
    
    scrollTrigger:{
        trigger:'#nav h4',
        scroller:'body',
        start:"top-10px",
        scrub:1,
        duration:1,
    }

})
let nav=document.querySelector('#nav');
nav.addEventListener('mousemove',function(){
    nav.style.zIndex=100;
    cursor.style.zIndex=101;
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
gsap.to('#colon1',{
    top:35,
    duration:1,
    left:200,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        scrub:2,
    }
})
gsap.to('#colon2',{
    bottom:50,
    right:270,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        scrub:2,
    }
})
let imgs=document.querySelectorAll('.elem img')
let h2s=document.querySelectorAll('.elem h2')
let card2=document.querySelectorAll('.elem')
card2.forEach(function(element){
    element.addEventListener('mouseenter',function(){
        h2s.forEach(function(element2){
            element2.style.color='white';
            element2.style.webkitTextStroke='#000 0.3px';
        })
        imgs.forEach(function(img){
            img.style.opacity=1;
            img.style.transform='scale(1.05)';
        })
    })
    element.addEventListener('mouseleave',function(){
        h2s.forEach(function(element2){
            element2.style.color='black';
            element2.style.webkitTextStroke='none';
        })
        imgs.forEach(function(img){
            img.style.opacity=0;
            img.style.transform='scale(1)';
        })
    })
})
gsap.to('#page4 h1',{
    top:-10,
    duration:1,
    scrollTrigger:{
        scroller:'body',
        trigger:"#page4 h1",
        scrub:1,
    }
})
let i=document.querySelector('#arrow i')
let arrow=document.querySelector('#arrow')
let flag=false;
arrow.addEventListener('mouseenter',function(){
    arrow.style.zIndex=98;
    arrow.style.height='75px';
    arrow.style.width='75px';
    arrow.style.transform='translate(85px,80px)'
    arrow.style.backgroundColor='#95c11e'
    i.style.transform='rotate(360deg) scale(0.5)'
    flag=true;

})
gsap.to('#arrow',{
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        scroller:'body',
        trigger:"#arrow",
        start:'top 80%',
        scrub:0.1,
    }
    
})
document.addEventListener('mousemove',function(){
if(arrow_x>300 && flag){
    arrow.style.height='240px';
    arrow.style.width='240px';
    arrow.style.transform='translate(0px,0px)'
    arrow.style.backgroundColor='transparent'
    i.style.transition='transform 0.3s ease-in-out';
    i.style.transform='scale(1)';
    flag=false
}
})

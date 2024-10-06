var sampad=document.querySelector('#cursor')
var blur =document.querySelector('#cursor-blur')

 document.addEventListener("mousemove",function(sam){
    sampad.style.top = sam.y +'px'
    sampad.style.left = sam.x +'px' 
      
    blur.style.top = sam.y -200+'px'
    blur.style.left = sam.x -200  +'px'  
 })

 
 
 
gsap.to('.nav',{
    backgroundColor:'#000',
    height:'80px',
    duration:0.5,
    scrollTrigger:{
        trigger:'.nav',
        scroller:'body',
        // markers:true,
        start:'top -10%',
        end:'top -11%',
        scrub:1
         
    }
})
gsap.to('#main',{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        markers:true ,
        start:'top-50%',
        end:'top-100%',
        scrub:2 
    }
})
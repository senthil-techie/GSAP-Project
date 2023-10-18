const timeline = gsap.timeline({default:{duration:1}})
timeline
 .from(".header",{
    y:"-100%",
    ease:"bounce"
})
.from(".link",{
    opacity:0,
    stagger: .10
})
.from(".right",{
    x:"-100vw",
    ease: "power2.in"
},1)
.from(".left",{
    x:"-100%"
},"<.5")
.to(".footer",{
    y:0,
    ease:"elastic",
})
.fromTo(".button",{
    opacity:0,
    scale:0,
    rotation:750},{
        opacity:1,
        scale:2,
        rotation:0
}) 

const button = document.querySelector(".button")

button.addEventListener("click",()=>{
    timeline.reverse()
})

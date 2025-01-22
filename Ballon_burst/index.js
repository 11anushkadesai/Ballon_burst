gsap.to("#cloud", {
    x: 1800,  
    duration: 100,  
    delay: 1,  
    repeat: -1,  
    ease: "linear"  
});

gsap.to("#cloud2", {
    x: -1800,  
    duration: 100,  
    delay: 1,  
    repeat: -1,  
    ease: "linear"  
});


gsap.to(
    "#play_btn",{
        width:"400px",
        height:"350px",
        duration:1,
        repeat:-1,
        yoyo:true,
        ease:"power2.inOut"
    }
)

let back=gsap.to("#back_img",{
    width:"110px",
    height:"110px",
    duration:1,
    repeat:-1,
    yoyo:true,
    ease:"power2.inOut"
})

let mb= gsap.to("#machine_bottom",{
    width:"150px",
    duration:1,
    repeat:-1,
    yoyo:true,
    ease:"power2.inOut"
});

let mt= gsap.to("#machine_top",{
    width:"150px",
    duration:1,
    repeat:-1,
    yoyo:true,
    ease:"power2.inOut"
});

let ml= gsap.to("#machine_leftpart",{
    height:"120px",
    duration:1,
    repeat:-1,
    yoyo:true,
    ease:"power2.inOut"
});

function pausemachine(){
    
    mb.pause();
    mt.pause();
    ml.pause();
    back.pause()
}
function resumeemachine(){
    mb.play();
    mt.play();
    ml.play();
    back.play();
}

document.querySelector(".machine").addEventListener("mouseover",pausemachine)
document.querySelector(".machine").addEventListener("mouseout",resumeemachine)

document.querySelector("#back_img").addEventListener("mouseover",pausemachine)
document.querySelector("#back_img").addEventListener("mouseout",resumeemachine)
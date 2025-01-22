let score=0;
function onpress() {
  gsap.to("#machine_top", {
    height: "200px",
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut",
  });
  gsap.to("#machine_bottom",{
    width:"95%",
    height:"95%",
    duration:0.5,
    repeat:1,
    yoyo:true,
    ease:"power2.inOut"
});
let ml= gsap.to("#machine_leftpart",{
  height:"120px",
  duration:0.5,
  repeat:1,
  yoyo:true,
  ease:"power2.inOut"
});

  let count = 0;
  let div = null; 
  let handle = document.querySelector("#machine_top");
  
  handle.addEventListener("click", function () {
    count++;
    
    if (count === 1) {
      
      div = document.createElement("div");
      let ran=Math.floor(Math.random()*10)+1;
      div.style.backgroundImage = `url('/Graphics/bal_${ran}.png')`;
      div.style.width = "70px";
      div.style.height = "70px";
      div.style.position = "absolute";
      div.style.left = "81%";
      div.id="bal";
      div.style.top = "59%";
      div.style.backgroundSize = "cover";
      div.style.zIndex = "10";
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.alignContent = "center";
      div.style.alignItems = "center";
      // letter
      let top = document.createElement("div");
      let letter=Math.floor(Math.random()*26)+1;
      top.style.backgroundImage = `url('/Graphics/alpha_${letter}.png')`;
      top.style.width = "40px";
      top.style.height = "90px";
      top.style.backgroundSize = "cover";
      div.appendChild(top);
      // thread
      let bottom = document.createElement("div");
      bottom.style.backgroundImage = "url('/Graphics/Symbol 100011.png')";
      bottom.style.width = "60px";
      bottom.style.height = "60px";
      bottom.style.marginLeft = "10px";
      bottom.style.marginTop = "11px";
      bottom.style.backgroundSize = "cover";
      div.appendChild(bottom);

      document.body.appendChild(div);

      // increase size 
      gsap.fromTo(
        div,
        { scale: 0 },
        { scale: 1.5, transformOrigin: "bottom", duration: 2 }
      );
      
      div.addEventListener("click",function(){
        let sound= new Audio("/Graphics/balloon-pop-48030.mp3")
        sound.play();

        score +=1;
        document.getElementById('score').innerText="Score: "+score;
        this.remove();
        
      })
    }

    // Move 
    if (count === 1 && div) {
      gsap.timeline().to(div, {
        x:"random(-1000, 100, 50)", 
        y: "random(-1000, 100, 50)", 
        delay:1,
        duration: 10,
        ease: "none",
        repeat: -1,
        repeatRefresh: true, 
      });
      
    }

    // burst
   
    

    
   
    return ;

  });
}

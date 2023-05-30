const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score")

document.addEventListener("keydown", function(event) {
    jump();
});

function jump (){
  if (dino.classList !="jump") {
      dino.classList.add("jump")
  }
  setTimeout(function() {
      dino.classList.remove("jump")
   }, 900)
}


let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    score.innerText++;

    if (cactusLeft <0) {
        cactus.style.display = "none";
       } else {
        cactus.style.display = "";
       }
    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("You got a score of: " + score.innerText +  "Play again?");
        location.reload();
    }
}, 10)


   

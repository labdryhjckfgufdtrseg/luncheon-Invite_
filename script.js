const music = document.getElementById("music");

document.body.addEventListener("click", () => {
    music.play().catch(()=>{});
}, { once:true });

// petals generator
const container = document.querySelector(".petals");

for(let i=0;i<20;i++){
    let petal = document.createElement("span");
    petal.style.left = Math.random()*100 + "vw";
    petal.style.animationDuration = (3 + Math.random()*5) + "s";
    container.appendChild(petal);
}

// tap to scroll
document.querySelectorAll(".page").forEach(page=>{
    page.addEventListener("click",()=>{
        window.scrollBy({
            top:window.innerHeight,
            behavior:"smooth"
        });
    });
});

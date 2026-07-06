const openBtn = document.getElementById("open");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    // Play music safely (browser-friendly)
    if (music) {
        music.muted = false;
        music.currentTime = 0;
        music.play().catch(() => {
            console.log("User interaction required for audio");
        });
    }

    // Smooth scroll to next page
    const pages = document.querySelector(".pages");
    if (pages) {
        pages.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

});

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(()=>{
    const now = new Date().getTime();
    const gap = eventDate - now;

    const d = Math.floor(gap/(1000*60*60*24));
    const h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((gap%(1000*60*60))/(1000*60));
    const s = Math.floor((gap%(1000*60))/1000);

    if(countdown){
        countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }
},1000);

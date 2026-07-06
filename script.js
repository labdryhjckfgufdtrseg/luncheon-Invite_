// ===============================
// 🎵 MUSIC SETUP
// ===============================
const openBtn = document.getElementById("open");
const music = document.getElementById("music");

function playMusic() {
    if (!music) return;

    music.muted = false;
    music.volume = 0.8;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("User interaction required for audio");
        });
    }
}

// ===============================
// 💌 OPEN INVITATION
// ===============================
openBtn.addEventListener("click", () => {

    // play music
    playMusic();

    // smooth scroll to next page
    const pages = document.querySelector(".pages");

    if (pages) {
        pages.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    // optional: hide button after click
    openBtn.style.opacity = "0";
    setTimeout(() => {
        openBtn.style.display = "none";
    }, 400);
});


// ===============================
// 🌸 FALLING PETALS
// ===============================
const petalsContainer = document.querySelector(".petals");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";
    petal.style.opacity = Math.random();

    petalsContainer.appendChild(petal);

    // remove after animation ends (performance)
    setTimeout(() => {
        petal.remove();
    }, 12000);
}

// generate petals continuously
setInterval(createPetal, 300);


// ===============================
// ✨ FADE-IN ON SCROLL
// ===============================
const pages = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.3
});

pages.forEach(page => {
    page.style.opacity = "0";
    page.style.transform = "translateY(40px)";
    page.style.transition = "all 1s ease";
    observer.observe(page);
});


// ===============================
// 💖 SOFT SPARKLES (extra luxury)
// ===============================
function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.style.position = "fixed";
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.background = "white";
    sparkle.style.borderRadius = "50%";
    sparkle.style.opacity = "0.8";

    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.boxShadow = "0 0 10px rgba(255,255,255,0.8)";

    sparkle.style.animation = "sparkleFade 2s ease forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
}

// spawn sparkles slowly
setInterval(createSparkle, 800);


// ===============================
// ✨ SPARKLE KEYFRAME (auto inject)
// ===============================
const style = document.createElement("style");
style.innerHTML = `
@keyframes sparkleFade {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
}
`;
document.head.appendChild(style);

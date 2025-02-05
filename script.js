let nico = document.getElementById("nico");
let sad = document.getElementById("sad");
let dance = document.getElementById("dance");
let yippee = document.getElementById("yippee");
let music = document.getElementById("music");

document.getElementById("Yes").addEventListener("click", function () {
  let duration = 5 * 1000; // 5 seconds
  let end = Date.now() + duration;

  let sound = document.getElementById("confettiSound");
  yippee.currentTime = 0;
  music.currentTime = 0;
  sound.currentTime = 0; // Reset sound if clicked multiple times
  sound.play();
  yippee.play();
  music.play();
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  nico.style.display = "none";

  fadeInImage(dance);
});

function fadeInImage(img) {
  if (img) {
    img.style.display = "block";
    setTimeout(() => {
      img.classList.add("fade-in");
    }, 10);
  }
}
document.getElementById("No").addEventListener("click", function () {
  let sound = document.getElementById("sadTrumpet");
  sound.currentTime = 0; // Reset sound if clicked multiple times
  sound.play();

  nico.style.display = "none";

  fadeInImage(sad);
});

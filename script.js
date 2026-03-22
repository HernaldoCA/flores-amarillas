const surpriseBtn = document.getElementById("surpriseBtn");
const loveLine = document.getElementById("loveLine");
const music = document.getElementById("music");

surpriseBtn.addEventListener("click", async () => {
  loveLine.hidden = false;
  loveLine.style.opacity = "0";
  loveLine.style.transform = "translateY(8px)";
  loveLine.style.transition = "opacity 500ms ease, transform 500ms ease";
  surpriseBtn.textContent = "Te amo";
  surpriseBtn.disabled = true;

  requestAnimationFrame(() => {
    loveLine.style.opacity = "1";
    loveLine.style.transform = "translateY(0)";
  });

  // Autoplay can be blocked by browsers. Clicking the button usually enables playback.
  try {
    await music.play();
  } catch (_error) {
    // Keep controls visible so user can play manually.
  }
});

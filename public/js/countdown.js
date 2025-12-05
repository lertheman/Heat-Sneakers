function updateCountdown(el) {
  const releaseStr = el.dataset.release;
  if (!releaseStr) {
    el.textContent = "Release date TBA";
    return;
  }

  const releaseDate = new Date(releaseStr).getTime();
  if (isNaN(releaseDate)) {
    el.textContent = "Release date TBA";
    return;
  }

  const now = Date.now();
  const diff = releaseDate - now;

  if (diff <= 0) {
    el.textContent = "Already Released";
    return;
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;

  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const mins = Math.floor((diff % hourMs) / minMs);

  el.textContent = `${days}d ${hours}h ${mins}m`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".countdown").forEach((el) => {
    updateCountdown(el);
    setInterval(() => updateCountdown(el), 60000);
  });
});

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  // Create overlay dynamically (no HTML edits)
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  toggle.addEventListener("click", () => {
    menu.classList.contains("active") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });


  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

// =========================
// HERO COUNTDOWN TIMER
// =========================

// Target: 26 Feb 2026, 09:00:00 (local time)
const eventStartTime = new Date(2026, 1, 26, 9, 0, 0).getTime();
// NOTE: Month is 0-based (Feb = 1)

const daysEl = document.getElementById("cd-days");
const hoursEl = document.getElementById("cd-hours");
const minutesEl = document.getElementById("cd-minutes");
const secondsEl = document.getElementById("cd-seconds");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !countdownEl) {
    return;
  }

  const now = new Date().getTime();
  const diff = eventStartTime - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "<span class='countdown-label'>Live now</span>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

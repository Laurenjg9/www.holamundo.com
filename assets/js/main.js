/* Hola Mundo OS — Main Script */

/* ─── Clock ─── */
function updateClock() {
  const el = document.getElementById('os-clock');
  if (!el) return;
  const now = new Date();
  const hh = now.getHours().toString().padStart(2, '0');
  const mm = now.getMinutes().toString().padStart(2, '0');
  el.textContent = `${hh}:${mm} · MTV/MX`;
}
updateClock();
setInterval(updateClock, 30000);

/* ─── Smooth scroll ─── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(el.dataset.scroll);
  });
});

/* ─── Registration form ─── */
(function () {
  const form = document.getElementById('reg-form');
  const successEl = document.getElementById('reg-success');
  const successName = document.getElementById('reg-success-name');
  const resetBtn = document.getElementById('reg-reset');
  let activeInterest = 'CODE';

  // Interest chips
  document.querySelectorAll('.reg-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.reg-chip').forEach(c => c.classList.remove('is-on'));
      chip.classList.add('is-on');
      activeInterest = chip.dataset.value;
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const age = document.getElementById('reg-age').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      if (!name || !age || !email) return;

      form.style.display = 'none';
      successEl.style.display = 'block';
      successName.textContent = name || 'futuro hacker';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.getElementById('reg-name').value = '';
      document.getElementById('reg-age').value = '';
      document.getElementById('reg-email').value = '';
      successEl.style.display = 'none';
      form.style.display = 'flex';
    });
  }
})();

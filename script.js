(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  // Theme persistence
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.classList.add('theme-light');
    toggle && (toggle.textContent = '🌚');
  }

  toggle && toggle.addEventListener('click', function () {
    const isLight = root.classList.toggle('theme-light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '🌚' : '🌙';
  });

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();



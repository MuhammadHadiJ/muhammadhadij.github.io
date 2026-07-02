(function () {
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');

  function closeNav() {
    sidebar.classList.remove('open');
    scrim.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    sidebar.classList.add('open');
    scrim.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    isOpen ? closeNav() : openNav();
  });

  scrim.addEventListener('click', closeNav);

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // Active section highlighting
  const navLinks = document.querySelectorAll('.sidebar-nav a[data-nav]');
  const sections = Array.from(navLinks)
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`.sidebar-nav a[data-nav="${entry.target.id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }
})();

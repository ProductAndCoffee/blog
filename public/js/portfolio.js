/* public/js/portfolio.js */
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Check localStorage or system preference
    const currentTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
      document.body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }

  // Mobile Menu Overlay
  const menuTrigger = document.querySelector('.portfolio-mobile-menu-trigger');
  const menuClose = document.querySelector('.portfolio-mobile-menu-close');
  const menuOverlay = document.querySelector('.portfolio-mobile-menu-overlay');

  if (menuTrigger && menuOverlay) {
    menuTrigger.addEventListener('click', () => {
      menuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevents background scroll
    });
  }

  if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', () => {
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
    
    // Close when clicking outside content
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

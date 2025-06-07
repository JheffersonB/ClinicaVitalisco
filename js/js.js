document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
        this.classList.toggle('active');
      });

      if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) themeToggle.textContent = 'Modo Light';
} else {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) themeToggle.textContent = 'Modo Dark';
}

// Cambia el tema al hacer clic en el botón
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      this.textContent = 'Modo Light';
    } else {
      localStorage.setItem('theme', 'light');
      this.textContent = 'Modo Dark';
    }
  });
}
      

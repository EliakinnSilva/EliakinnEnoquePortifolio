function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Armazenar a preferência no localStorage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Verificar a preferência armazenada ao carregar a página
window.onload = function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
};